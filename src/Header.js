import React from 'react';

function Header() {
  return (
    <header>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAAA+Pj7i4uKQkJC7u7vf39/r6+vQ0NDa2trz8/NeXl6vr691dXWBgYESEhI3Nzenp6dsbGxQUFBFRUUuLi74+PiRkZGHh4eenp7BwcFYWFiXl5fT09MkJCRDQ0NnZ2esKJtmAAAGJElEQVR4nO2d6XriOgyGCQQSkrAvpSmF3v9VngM8wyBZzoZldWy9f0vtfPEi2XLk0UhRFEVRFEVRFEVRFEVRFEVRFEVRFEVRoqPIp+m23O3H77Lfldt0mhfSggBZtU3cs60yaWEPZumBQd6DQzqTlldsdmzyHuw2kv31+MEs78HHUUhfcfKi78ZJpB0rb/puVN71zbnHH2Y39yvw07O+G58e9RWlgMAkKb2NxvlFRGCSXDz11FxI343ch8CpoMAkmfIL3IgKTJINt8CGFrwu0qrOZ5P3mOV1lS6u9mqYW9E6Bk+1W9fqWFs9JtaxOKfr3PJUmv/Q1THOqAVpJpYTtgonS6rCC59dpAx9ybtMzcg6uWojXLVVzVXZk3plVsvkwBGD8MuHH1V8mRXzDEVzNZGy1GOSGjXvOKox14PsxveJ6WYwrBcLoxIPDtQT09FwPz4MA+yvBW8YrXhyXcNRagz+wRiLrren8K7al+Py28Ez6ofb4vEoXPnf/CqwXXT7CHgY8Bt6k5p1IkC2kM1t+st3XWN/HjlwTm3iDL0+9pBJfffxV9AgZegpXMY00ES2dFg0ydMDhjM2Wmm4nM5RdIlvufTgZZ0NWnECH+PgrkbUPX7clUyz/lvXCvwBhSndDRbkknJv6c2tlaFNFHfOKXp1wwrJZtPzablYLJan83TW9PqBDmiX4INshz0JASx3gEc4r8o1LCRZl5VtkdegEHnH/Z+EBjk0fa3995JYpd9ZLb+pfwC2Cf4CWX1Xbg3q/b1c3uzcHOS4nIn+On75O/wLWgC4mhHg4uza4z8zcq8MsTQ0vrxS3GHgVrGrJSq094vO/3dcdNB3LxJ3i6cbbGw5wSJd2fztsFL7hMHxvJ/fO+ra7IXwbbuaTMvGh7Ew2/cQmCR77GTO8pyaa+Frc7UCgAuLblNp/3MM3d4cnExdLS9ga3Sav7qOwFc6DXA4r+/fE/ZkDErtsGYpsHnvxrqDeYPruPH74u5Ahe0Li2xonP/S7krD5YWQwonNhWln1V74L1CYDRf4v8S2VvwFCukY4/3pr+Xps6qrz1N5tb6FttjgL1BomWTGp/y1ebL8NKZ/uG4uXl4hbSaWlPGe005rs9EQV0gaeuvZSfr8ZqPpl1aIdx1vNIbBySB2k8WVVkj4om0LHOKATpOnIqzQ7KPrdhuemXNTQz+VVWhE4DpGqMw4vX0bQVahMY92Xb4ZX2vY51NRhTis0CPGaLSitXOLKsTmrcV2A/BYtEZGJBUaTdhnz73zP0sqPKNn7LcPho3G2fI7SYXI4+67hYJM/8XyM0GF36gR+saFcD8ld8NFFaJ5pn9wA/molrlGUCFa8fWPKKDoyIr+lZxCdHBxSBwc9QI6MiWnELmkQ05HopdEO6dyCksHNcN66MlYTiF0SoYdq4NzDe0SiSlEc/2wuB6KU5L2RkwhXNy37gnSoH1IcqkvpnB4EPWVDuFPMYXQKR0a9ILTFemaiimEk8TQ87sdShFTCK310M8h4AcdpNcgphBuYAw9qwTdBnIr45coHHq+FgZ4f7PCENsw/HEY/lwavj0M36cJ3y8Nf20R/vowgjV++Ps04e+1hb9fGsGed/hxi/BjTxHED8OPAYcfx4/gLEb452kiOBMV/rm2CM4mRnC+NPwzwhGc847grH4E31uE/81MBN89/fvfroX4/WH435CG/x2wyLfcFni+5Rb4Ht8Kz/f4/nMq2OHJqeA9L0YDPHkxvOc2scOU28R3fpoGmPLT+M4x1ABTjiHfeaIagA/iLk+U51xfdthyfaG9Xnevri8ohbnD5Iaec+7Z4Mu55z1vogXGvInec1+ScOa+FMhfSsCZvzSCHLTh5xEOPxd0BPm8w8/JHkFe/fDvRojgfosI7igJ/56ZCO4KiuC+J9udXT9Md3ZZ7lFmvQUx+HvXIrg7L4L7DyO4wzKCe0gjuEs2gvuAR+Hf6TyK4F7uUfh3q49sZydZsJ7f5OaId+B4+HC+6dSDYsM9HncbqfZ7MksP7c85kEPqNDYxnKyyrHPeYlvJBIBsFPk03Za7/fhd9rtym05z8b6pKIqiKIqiKIqiKIqiKIqiKIqiKIqiKP75D+M/XPDF7UTCAAAAAElFTkSuQmCC" alt="Company logo" />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;