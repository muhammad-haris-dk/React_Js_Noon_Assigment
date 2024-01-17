import React from 'react'
import { Cards_Component } from './Cards_Component'
import { Grid } from '@mui/material'

const img_Array = [
    {
        img_url_1:"https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif",
        img_url_2:"https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif",
        img_url_3:"https://f.nooncdn.com/mpcms/EN0001/assets/78d6564f-25d9-4513-ad82-041e0b281f9f.png?format=avif",
        img_url_4:"https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif"
    },
    {
        img_url_1:"https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif",
        img_url_2:"https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif",
        img_url_3:"https://f.nooncdn.com/mpcms/EN0001/assets/78d6564f-25d9-4513-ad82-041e0b281f9f.png?format=avif",
        img_url_4:"https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif"
    },
    {
        img_url_1:"https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif",
        img_url_2:"https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif",
        img_url_3:"https://f.nooncdn.com/mpcms/EN0001/assets/78d6564f-25d9-4513-ad82-041e0b281f9f.png?format=avif",
        img_url_4:"https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif"
    },
]
const Section_02_Component = () => {
    
  return (
    <div style={{marginTop:"20px"}}>
    <h1 style={{color:"gray",marginLeft:"20px",fontFamily:"Arial"}}>More reasons to shop</h1>
      <Grid sx={{marginTop:"20px"}} container>
        {
            img_Array.map((crt_obj,index)=>{
                return <Grid key={index} item sm={12} md={6} lg={4} xl={4}>
                <Cards_Component 
                    img_1={crt_obj.img_url_1}
                    img_2={crt_obj.img_url_2}
                    img_3={crt_obj.img_url_3}
                    img_4={crt_obj.img_url_4}

                />
            </Grid>
            })
        }
      </Grid>
    </div>
  )
}

export {Section_02_Component}
