import styled from "styled-components";

export default Button;
const getStyle = (cor, siz, brd, rnd) => {
  
  if (cor === 'primary'){
    
    if (siz === 'sm' && brd === siz && rnd === brn ) {
      return `
        border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #1E90FF;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === siz && rnd !== brn ) {
      return `
        border: 1px solid;
        padding: .2rem .5rem;
        background: #1E90FF;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === null && rnd === brn ) {
      return `
        padding: .2rem .5rem;
        background: #1E90FF;
        color: #ffffff;
      `;
    };

  } else if (cor === 'error') {
    if (siz === 'sm' && brd === siz && rnd === brn ) {
      return `
        border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #f03535;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === siz && rnd !== brn ) {
      return `
        border: 1px solid;
        padding: .2rem .5rem;
        background: #f03535;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === null && rnd === brn ) {
      return `
        padding: .2rem .5rem;
        background: #f03535;
        color: #ffffff;
      `;
    };

  } else if (cor === 'success') {
    if (siz === 'sm' && brd === siz && rnd === brn ) {
      return `
        border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #1eff00;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === siz && rnd !== brn ) {
      return `
        border: 1px solid;
        padding: .2rem .5rem;
        background: #1eff00;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === null && rnd === brn ) {
      return `
        padding: .2rem .5rem;
        background: #1eff00;
        color: #ffffff;
      `;
    };

  } else if (cor === 'warning') {
    if (siz === 'sm' && brd === siz && rnd === brn ) {
      return `
        border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #fdf902;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === siz && rnd !== brn ) {
      return `
        border: 1px solid;
        padding: .2rem .5rem;
        background: #fdf902;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === null && rnd === brn ) {
      return `
        padding: .2rem .5rem;
        background: #fdf902;
        color: #ffffff;
      `;
    };
  











    if (siz === 'sm' && brd === siz && rnd === brn ) {
      return `
        border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #1E90FF;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === siz && rnd !== brn ) {
      return `
        border: 1px solid;
        padding: .2rem .5rem;
        background: #1E90FF;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === null && rnd === brn ) {
      return `
        padding: .2rem .5rem;
        background: #1E90FF;
        color: #ffffff;
      `;
    };
  } else if (cor === 'error') {
    if (siz === 'sm' && brd === siz && rnd === brn ) {
      return `
        border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #f03535;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === siz && rnd !== brn ) {
      return `
        border: 1px solid;
        padding: .2rem .5rem;
        background: #f03535;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === null && rnd === brn ) {
      return `
        padding: .2rem .5rem;
        background: #f03535;
        color: #ffffff;
      `;
    };
  } else if (cor === 'success') {
    if (siz === 'sm' && brd === siz && rnd === brn ) {
      return `
        border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #1eff00;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === siz && rnd !== brn ) {
      return `
        border: 1px solid;
        padding: .2rem .5rem;
        background: #1eff00;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === null && rnd === brn ) {
      return `
        padding: .2rem .5rem;
        background: #1eff00;
        color: #ffffff;
      `;
    };
  } else if (cor === 'warning') {
    if (siz === 'sm' && brd === siz && rnd === brn ) {
      return `
        border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #fdf902;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === siz && rnd !== brn ) {
      return `
        border: 1px solid;
        padding: .2rem .5rem;
        background: #fdf902;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === null && rnd === brn ) {
      return `
        padding: .2rem .5rem;
        background: #fdf902;
        color: #ffffff;
      `;
    };
    if (siz === 'sm' && brd === siz && rnd === brn ) {
      return `
        border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #1E90FF;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === siz && rnd !== brn ) {
      return `
        border: 1px solid;
        padding: .2rem .5rem;
        background: #1E90FF;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === null && rnd === brn ) {
      return `
        padding: .2rem .5rem;
        background: #1E90FF;
        color: #ffffff;
      `;
    };
  } else if (cor === 'error') {
    if (siz === 'sm' && brd === siz && rnd === brn ) {
      return `
        border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #f03535;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === siz && rnd !== brn ) {
      return `
        border: 1px solid;
        padding: .2rem .5rem;
        background: #f03535;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === null && rnd === brn ) {
      return `
        padding: .2rem .5rem;
        background: #f03535;
        color: #ffffff;
      `;
    };
  } else if (cor === 'success') {
    if (siz === 'sm' && brd === siz && rnd === brn ) {
      return `
        border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #1eff00;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === siz && rnd !== brn ) {
      return `
        border: 1px solid;
        padding: .2rem .5rem;
        background: #1eff00;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === null && rnd === brn ) {
      return `
        padding: .2rem .5rem;
        background: #1eff00;
        color: #ffffff;
      `;
    };
  } else if (cor === 'warning') {
    if (siz === 'sm' && brd === siz && rnd === brn ) {
      return `
        border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #fdf902;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === siz && rnd !== brn ) {
      return `
        border: 1px solid;
        padding: .2rem .5rem;
        background: #fdf902;
        color: #ffffff;
      `;
    } else if (siz === 'sm' && brd === null && rnd === brn ) {
      return `
        padding: .2rem .5rem;
        background: #fdf902;
        color: #ffffff;
      `;
    };

  
    



  } else {
    return `
      background: #fdfdfd;
      color: #333333;
    `;
  };

};
  


  if (cor === 'error') {
  
  };
  if (cor === 'success') {

  };




     else {
      return `
        background: #fdfdfd;
        color: #333333;
      `;
    };

      
    
      return `
      border: 1px solid;
        border-radius: 5px;
        padding: .2rem .5rem;
        background: #1E90FF;
        color: #ffffff;
      `;
    };
  
  } else if (siz === 'md') {

  if (cor === 'error') {
      return `
        padding: .2rem .5rem;
        background: #f03535;
        color: #ffffff;
      `;
    } else if (cor === 'success') {
      return `
        padding: .2rem .5rem;
        background: #1eff00;
        color: #ffffff;
      `;
    } else if (cor === 'warning') {
      return `
        padding: .2rem .5rem;
        background: #fdf902;
        color: #ffffff;
      `;
    } else if (siz === 'md') {

        return `
          padding: .2rem .5rem;
          background: #1E90FF;
          color: #ffffff;
        `;
      } else if (cor === 'error') {
        return `
          padding: .2rem .5rem;
          background: #f03535;
          color: #ffffff;
        `;
      } else if (cor === 'success') {
        return `
          padding: .2rem .5rem;
          background: #1eff00;
          color: #ffffff;
        `;
      } else if (cor === 'warning') {
        return `
          padding: .2rem .5rem;
          background: #fdf902;
          color: #ffffff;
        `;
      }









    else {
      return `
        background: #fdfdfd;
        color: #333333;
      `;
    };




  } else {
    return `
      background: transparent;
      color: #333333;
    `;
  };

  



  
  
  if (siz === 'sm') {
    if (brd === siz) {
      if (rdn === brd) {
        if (cor === 'primary') {
          return `
            padding: .2rem .5rem;
            border: 1px solid;
            border-radius: 5px;
            background: #1E90FF;
            color: #ffffff;
          `;
        } else if (cor === 'error') {
          return `
            padding: .5rem .7rem;
            border: 1px solid;
            border-radius: 5px;
            background: #f03535;
            color: #ffffff;
          `;
        } else if (cor === 'success') {
          return `
            padding: 1rem 1.2rem;
            border: 1px solid;
            border-radius: 5px;
            background: #1eff00;
            color: #ffffff;
          `;
        } else if (cor === 'warning') {
          return `
            padding: 1.2rem 1.5rem;
            border: 1px solid;
            border-radius: 5px;
            background: #fdf902;
            color: #ffffff;
          `;
        } else {
          return `
            padding: 1.2rem 1.5rem;
            border: 1px solid;
            border-radius: 5px;
            border-color: #6f6f6f;
            color: #333333;
         `;
        };
      } else {
        if (cor === 'primary') {
          return `
            padding: .2rem .5rem;
            border: 1px solid;
            background: #1E90FF;
            color: #ffffff;
          `;
        } else if (cor === 'error') {
          return `
            padding: .5rem .7rem;
            border: 1px solid;
            background: #f03535;
            color: #ffffff;
          `;
        } else if (cor === 'success') {
          return `
            padding: 1rem 1.2rem;
            border: 1px solid;
            background: #1eff00;
            color: #ffffff;
          `;
        } else if (cor === 'warning') {
          return `
            padding: 1.2rem 1.5rem;
            border: 1px solid;
            background: #fdf902;
            color: #ffffff;
          `;
        } else {
          return `
            padding: 1.2rem 1.5rem;
            border: 1px solid;
            border-color: #6f6f6f;
            color: #333333;
         `;
        };
      } else {
          return `
          background: #fdfdfd;
          border: 1px solid;
        border-color: #6f6f6f;
        color: #333333;
    
      

      
      
        if (cor === 'primary') {
          return `
            padding: .2rem .5rem;
            border: 1px solid;
            background: #1E90FF;
            color: #ffffff;
          `;
        } else if (cor === 'error') {
          return `
            padding: .5rem .7rem;
            border: 1px solid;
            background: #f03535;
            color: #ffffff;
          `;
        } else if (cor === 'success') {
          return `
            padding: 1rem 1.2rem;
            border: 1px solid;
            background: #1eff00;
            color: #ffffff;
          `;
        } else if (cor === 'warning') {
          return `
            padding: 1.2rem 1.5rem;
            border: 1px solid;
            background: #fdf902;
            color: #ffffff;
          `;
        } else {
          return `
            padding: 1.2rem 1.5rem;
            border: 1px solid;
            border-color: #6f6f6f;
            color: #333333;
         `;
        };




      
          

      
        if (cor === '')
    
        `
      padding: .2rem .5rem;
      
    `
    {}

  } else if (siz === 'md') {
    `
    `;
  } else if (siz === 'lg') {
    `
    `;
  } else if (siz === 'bg') {
    `
    `; 
  }
  ///////////////////
  if (brd === siz ) {
    if (brd === 'sm') {
      return `
        border: 1px solid;
      `; 
    } else if (brd === 'md') {
      return `
        border: 1.5px solid;
      `;
    } else if (brd === 'lg') {
      return `
        border: 2px solid;
      `;
    } else if (siz === 'bg') {
      return `
        border: 2.5px solid;
      `; 
    }
  }
  ///////////////////
  if (rnd === siz ) {
    if (rnd === 'sm') {
      return `

      border-radius: 5px;
    `; 
    } else if (siz === 'md') {
      return `
        border-radius: 10px;
      `;
    } else if (siz === 'lg') {
      return `
        padding: 1rem 15px;
      `;
    } else if (siz === 'bg') {
      return `
        padding: 1.2rem 20px;
      `; 
    }
  }
  ///////////////////
  if (cor === 'primary') {
    return `
      background: #1E90FF;
      color: #ffffff;
    `;
  } else if (cor === 'error') {
    return `
      background: #f03535;
      color: #ffffff;
    `;
  } else if (cor === 'success') {
    return `
      background: #1eff00;
      color: #ffffff;
    `;
  } else if (cor === 'warning') {
    return `
      background: #fdf902;
      color: #ffffff;
    `;
  };

  return `
    background: #fdfdfd;
    color: #333333;
  `;
};

const button = styled.button`
  background: #fdfdfd;
  border: 1px solid;
  border-color: #6f6f6f;
  color: #333333;
  cursor: pointer;
  ${({siz, brd, rdn, cor}) => getStyle(siz, brd, rdn,cor)};
  `;

