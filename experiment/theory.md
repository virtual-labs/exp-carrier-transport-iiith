
In a semiconductor at room temperature, there are electrons and holes (there are more carriers in extrinsic semiconductor) moving around due to thermal energy.  In a semiconductor devices, the device is designed to control the flow of carriers. The motion of the carriers is called transport. Here we will learn about the two transport mechanisms Drift and Diffusion which together make the electronic devices behave the way they behave.


### Drift
Electrons in a semiconductor, move in the direction opposite to that of applied electric field E (force F= qE). Holes move in the direction of the applied electric field. As they are moving, they undergo collisions with vibrating Si atoms. This makes their movement unpredictable and random (similar to Brownian motion of gas particles). However, the net displacemnet of each charge carrier is along the electric field.The corresponding velocity (Drift velocity), which is the average velocity of the carrier, can be modeled as given below.<br>

Note: Subscript n is used for electrons and p for holes in this experiment <br>

Drift Velocity Formulas<br>
for electrons:
$$
\vec{v_{d,n}} = -\mu _{n} \cdot \vec{E} \tag{4.1}
$$
<br>
for holes: 
$$
\vec{v_{d,p}} = \mu _{p} \cdot \vec{E}\tag{4.2}
$$

Where:
$$
\vec{v_{d}} \quad is \quad the \quad drift \quad velocity \quad in \quad \frac{cm}{s} 
$$

$$
\mu \quad is \quad the \quad mobility \quad of \quad the \quad charge \quad carriers \quad (electrons \quad or \quad holes)\quad in \quad \frac{cm^{2}}{V \cdot s} \
$$

$$
\vec{E} \quad is \quad the \quad applied \quad electric \quad field 
$$

Mobility is the proportionality constant and depends on the carrier, material (substrate), doping concentration, temperature as well as impurity and surface roughness (for surface carrier flow). In Silicon electron has a mobility of 1400 cm^2/Vs and hole a mobility of 450cm^2/Vs

#### Drift Current Density
The drift current density J(currect per unit area) depends on the velocity, carrier concentration, and charge of the carriers:<br>
For electrons: 
$$
\vec{J_{n}} = -(q_{n} \cdot v_{d,n}) = -q_{n}(-\mu _{n} \cdot \vec{E}) =q_{n}\mu _{n}\vec{E} \tag{4.6}
$$
For holes: 
$$
\vec{J_{p}} = (q_{p} \cdot v_{d,p}) = q_{p}(\mu _{p} \cdot \vec{E}) = q_{p}\mu _{p}  \vec{E} \tag{4.7}
$$

Where q<sub>n</sub> and q<sub>p</sub> are defined as elemental charge (1.62*10<sup>-19</sup>) multiplied with the charge concentration.
The total drift current density:
$$
\vec{J_{drift}} = \vec{J_{n}} + \vec{J_{p}} \tag{4.5}
$$

Microsopic ohm's law can be defined as:
$$
\vec{J_{drift}} = \sigma \cdot \vec{E} = \vec{E}/{\rho} \tag{4.9}
$$
That would mean,
$$
\vec{J_{n}} = \frac{q_{n}(\mu _{n} \cdot \vec{E})}{\rho} \tag{4.10}
$$ 
and,
$$
\vec{J_{p}} = \frac{q_{p}(\mu _{p} \cdot \vec{E})}{\rho}
\tag{4.11}
$$
Where:

<b>σ</b> is the conductivity in &Omega;<sup>-1</sup><br>
<b>ρ</b> is the resistivity in &Omega;<br>

### Diffusion
Diffusion refers to the movement of carriers from a region of higher concentration to a region of lower concentration, which occurs in non-uniformly doped semiconductors. This movement under gradient to attain uniformity results in diffusion current, which works to eliminate the charge gradient.

#### Fick's First Law
The diffusion flux is proportional to the concentration gradient:<br>
for electrons:
$$
F_{n} = -D_{n} \cdot \frac{dn}{dx} \tag{4.12}
$$
<br>
for holes
$$
F_{p} = D_{p} \cdot \frac{dp}{dx} \tag{4.13}
$$

Where:

<b>D</b> is the diffusion coefficient in m<sup>2</sup>/s  <br> 
<b>dn/dx</b> is the concentration gradient in m<sup>-1</sup><br>

Therefore the diffusion Current Density will be:<br>
for electrons:
$$
J_{n} = (-q_{n}) -D_{n} \cdot \frac{dn}{dx} = q_{n} D_{n} \cdot \frac{dn}{dx} \tag{4.14}
$$
<br>
for holes:
$$
J_{p} = (-q_{p}) D_{p} \cdot \frac{dp}{dx} = -q_{p} D_{p} \cdot \frac{dp}{dx} \tag{4.15}
$$


The total diffusion current density:
$$
J_{diff} = J_{n} + J_{p} \tag{4.16}
$$
Let us suppose that the concentration of holes(p) vary with distance x
$$
J_{n} = -q D_{p}\frac{dp}{dx} \tag{4.17}
$$
where D<sub>p</sub> is the diffusion constant or diffusion coeficient or diffusivity of holes.<br>
The hole concentration is higher at lower value of x, so we assume the concentration gradient is negative along the +ve x-direction and the diffusion current due to holes is +ve along the +ve x-direction.<br>
Similarly diffusion current density for electrons 
$$
J_{p} = -q D_{n}\frac{dn}{dx} \tag{4.18}
$$
Here we take the positive sign because electronic charge is negative and also the concentration gradient is negative which makes J<sub>e2</sub> +ve and also it is +ve along the -ve x-axis.<br>
SO the resultant diffusion current density for both electrons and holes is 
$$
J_{D} = q(D_{n}\frac{dn}{dx}-D_{p}\frac{dp}{dx}) \tag{4.19}
$$
The total current density in semiconductor is the sum of drift current and diffusion current and is given by
$$
J = J_{drift}+J_{diff} \tag{4.20}
$$ 
$$
J = q(p\mu_{o} +n\mu_{o})E + q(D_{n}\frac{dn}{dx}-D_{p}\frac{dp}{dx})\tag{4.21}
$$

<img src="images/fig_4.1.png" width="400" height="300" align="center">

