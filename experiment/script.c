#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_LINE_LENGTH 4096

void process_file(const char *filename) {
    // Open input file
    FILE *input = fopen(filename, "r");
    if (!input) {
        fprintf(stderr, "Error: Cannot open input file %s\n", filename);
        exit(1);
    }

    // Create temporary output file
    FILE *output = fopen("temp_output.md", "w");
    if (!output) {
        fclose(input);
        fprintf(stderr, "Error: Cannot create temporary file\n");
        exit(1);
    }

    char line[MAX_LINE_LENGTH];
    int in_equation = 0;
    char current_equation[MAX_LINE_LENGTH * 4] = {0};
    int equation_lines = 0;

    while (fgets(line, MAX_LINE_LENGTH, input) != NULL) {
        // Check for equation start
        if (strncmp(line, "$$", 2) == 0 && !in_equation) {
            in_equation = 1;
            strcpy(current_equation, line);
            equation_lines = 1;
            continue;
        }

        // If we're inside an equation
        if (in_equation) {
            strcat(current_equation, line);
            equation_lines++;

            // Check for equation end
            if (strstr(line, "$$") != NULL) {
                in_equation = 0;
                
                // Process the equation
                char *tag_start = strstr(current_equation, "\\tag{");
                if (tag_start != NULL) {
                    char *tag_end = strchr(tag_start, '}');
                    if (tag_end != NULL) {
                        // Extract the tag
                        int tag_length = tag_end - tag_start + 1;
                        char tag[256];
                        strncpy(tag, tag_start, tag_length);
                        tag[tag_length] = '\0';

                        // Remove tag from original equation
                        *tag_start = '\0';
                        strcat(current_equation, tag_end + 1);

                        // Write the original equation without tag
                        fprintf(output, "%s", current_equation);

                        // Write the tag as separate equation
                        fprintf(output, "$$\n%s\n$$<br>\n", tag);
                    } else {
                        // Malformed tag, write as-is
                        fprintf(output, "%s", current_equation);
                    }
                } else {
                    // No tag found, write as-is
                    fprintf(output, "%s", current_equation);
                }

                // Reset for next equation
                current_equation[0] = '\0';
                equation_lines = 0;
            }
        } else {
            // Not in equation, just copy the line
            fprintf(output, "%s", line);
        }
    }

    fclose(input);
    fclose(output);

    // Replace original file with the processed version
    remove(filename);
    rename("temp_output.md", filename);
}

int main() {
    printf("Processing theory.md...\n");
    process_file("theory.md");
    printf("Done. All equations with tags have been reformatted.\n");
    return 0;
}