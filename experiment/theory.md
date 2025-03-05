# Drift
Electrons in a doped semiconductor begin to move when electric field is applied across it. Electrons, being negatively charged, move in the direction opposite to the electric field, while holes, being positively charged, move in the direction of the electric field. As they are moving, they undergo collisions with vibrating Si atoms. This makes their movement unpredictable, haphazard (similar to Brownian motion of gas particles). However, the net velocity of each charge carrier is along the electric field.Therefore, the velocity can be modeled as:

Drift Velocity Formulas<br>
for electrons:
$$
v_{d,n} = -\mu _{n} \cdot E
$$
<br>
for holes: 
$$
v_{d,p} = \mu _{p} \cdot E
$$

Where:
<b>v<sub>d</sub></b> is the drift velocity<br>
<b> &mu; </b> is the mobility of the charge carriers (electrons or holes)<br>
<b>E</b> is the applied electric field

### Drift Current Density
The drift current density depends on the velocity, density, and charge of the carriers:<br>
For electrons: 
$$
J_{n} = -(q_{n} \cdot v_{d,n}) = -q_{n}(-\mu _{n} \cdot v_{d,n}) = q_{n}\mu _{n} v_{d,n}
$$
For holes: 
$$
J_{p} = (q_{p} \cdot v_{d,p}) = q_{p}(\mu _{p} \cdot v_{d,p}) = q_{p}\mu _{p} v_{d,p}
$$
The total drift current density:
$$
J_{drift} = J_{n} + J_{p}
$$

According to Ohm’s law:
$$
J_{drift} = \sigma \cdot E = \frac{E}{\rho}
$$

Where:

<b>σ</b> is the conductivity<br>
<b>ρ</b> is the resistivity<br>

# Diffusion
Diffusion refers to the movement of charge carriers from a region of higher concentration to a region of lower concentration, which occurs in non-uniformly doped semiconductors. This random movement results in diffusion current, which works to eliminate the charge gradient.

### Fick's First Law
The diffusion flux is proportional to the concentration gradient:<br>
for electrons:
$$
F_{n} = -D_{n} \cdot \frac{dn}{dx}
$$
<br>
for holes
$$
F_{p} = D_{p} \cdot \frac{dp}{dx}
$$

Where:

<b>D</b> is the diffusion <br>
<b>dn/dx</b> is the concentration gradient<br>

Therefore the diffusion Current Density will be:<br>
for electrons:
$$
J_{n} = (-q_{n}) -D_{n} \cdot \frac{dn}{dx} = q_{n} D_{n} \cdot \frac{dn}{dx}
$$
<br>
for holes:
$$
J_{p} = (q_{p}) D_{p} \cdot \frac{dp}{dx} = q_{p} D_{p} \cdot \frac{dp}{dx}
$$


The total diffusion current density:
$$
J_{diff} = J_{n} + J_{p}
$$

<img src="images/fig_4.1.png" width="400" height="300" align="center">

