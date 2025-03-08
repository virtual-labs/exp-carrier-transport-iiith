
In a semiconductor at room temperature, there are electrons and holes (there are more carriers in extrinsic semiconductor) moving around due to thermal energy.  In a semiconductor devices, the device is designed to control the flow of carriers. The motion of the carriers is called transport. Here we will learn about the two transport mechanisms Drift and Diffusion which together make the electronic devices behave the way they behave.


## Drift
Electrons in a semiconductor opposite to the direction of applied electric field E (force F= qE). Holes move in the direction of the applied electric field. As they are moving, they undergo collisions with vibrating Si atoms. This makes their movement unpredictable and random (similar to Brownian motion of gas particles). However, the net displacemnet of each charge carrier is along the electric field.The corresponding velocity, which is the average velocity of the carrier is called the Drft Velocity can be modeled as given below.<br>

Note: Subscript n is used for electrons and p for holes in this experiment <br>

Drift Velocity Formulas<br>
for electrons:
$$
\vec{v_{d,n}} = -\mu _{n} \cdot \vec{E}
$$
<br>
for holes: 
$$
\vec{v_{d,p}} = \mu _{p} \cdot \vec{E}
$$

Where:
$$
\vec{v_{d}} \quad is \quad the \quad drift \quad velocity
$$

$$
\mu \quad is \quad the \quad mobility \quad of \quad the \quad charge \quad carriers \quad (electrons \quad or \quad holes)
$$

$$
\vec{E} \quad is \quad the \quad applied \quad electric \quad field
$$

Mobility is the proportionality constant and depends on the carrier, material (substrate), doping concentration, temperature as well as impurity and surface roughness (for surface carrier flow). In Silicon electron has a mobility of 1400 cm^2/Vs and hole a mobility of 450cm^2/Vs

### Drift Current Density
The drift current density J(currect per unit area) depends on the velocity, carrier concentration, and charge of the carriers:<br>
For electrons: 
$$
\vec{J_{n}} = -(q_{n} \cdot v_{d,n}) = -q_{n}(-\mu _{n} \cdot v_{d,n}) = q_{n}\mu _{n} v_{d,n}
$$
For holes: 
$$
\vec{J_{p}} = (q_{p} \cdot v_{d,p}) = q_{p}(\mu _{p} \cdot v_{d,p}) = q_{p}\mu _{p} v_{d,p}
$$
The total drift current density:
$$
J_{drift} = J_{n} + J_{p}
$$

Microsopic ohm's law can be defined as:
$$
\vec{J_{drift}} = \sigma \cdot \vec{E} = \vec{E}{\rho}
$$

Where:

<b>σ</b> is the conductivity<br>
<b>ρ</b> is the resistivity<br>

## Diffusion
Diffusion refers to the movement of carriers from a region of higher concentration to a region of lower concentration, which occurs in non-uniformly doped semiconductors. This movement under gradient to attain uniformity results in diffusion current, which works to eliminate the charge gradient.

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

