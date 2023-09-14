import React from "react";
import "./section6.scss";
import Logo from "../../../assests/logoWithOutText.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Section6 = () => {
  return (
    <div className='section6'>
      <div className='section6container'>
        <div className='right'>
          <div className='texts'>
            <h1>الاسئلة المكررة بكثرة</h1>
            <p>
              عندك اسئلة تانية ؟ <span>اسأل من هنا!</span>
            </p>
          </div>
          <div className='logo'>
            <img src={Logo} alt='' />
          </div>
        </div>
        <div className='left'>
          <Accordion className='accord'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className='accordTitle'>اية هي أي خدمة؟</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه لورم ایپسوم مک
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accord'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className='accordTitle'>اية هي أي خدمة؟</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه لورم ایپسوم مک
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accord'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className='accordTitle'>اية هي أي خدمة؟</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه لورم ایپسوم مک
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accord'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography className='accordTitle'>اية هي أي خدمة؟</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه لورم ایپسوم مک
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Section6;
