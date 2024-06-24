import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  TextField,
  Tabs,
  Tab,
  Box,
  ButtonBase,
  CardActionArea,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const SearchContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const CustomLink = styled(ButtonBase)({
  color: "black",
});
const CustomButtonB = styled(ButtonBase)({
  color: "black",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: "14px",
});

const chapter1 = {
  margin: "0 8px",
  whiteSpace: "pre-line",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "50%",
};
const chapter2 = {
  margin: "0 8px",
  whiteSpace: "pre-line",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "25%",
};
const chapter3 = {
  margin: "0 8px",
  whiteSpace: "pre-line",
  width: "25%",
};
const categories = [
  "ทุกหมวดหมู่",
  "นิยายโรแมนติก",
  "เวทมนตร์แฟนตาซี",
  "เวทมนตร์แฟนตาซี",
  "เวทมนตร์แฟนตาซี",
  "เวทมนตร์แฟนตาซี",
];

const novels = [
  {
    title: "หมอสวรรค์",
    author: "เฟิ่งจิง",
    image:
      "https://drive.google.com/thumbnail?id=1vYIARaAYnlqPsVZTWI7YiMDemjZG-nRs",
  },
  {
    title: "ความช่วยเหลือ",
    author: "โม เสี่ยวสุ่ย",
    image:
      "https://drive.google.com/thumbnail?id=1vYIARaAYnlqPsVZTWI7YiMDemjZG-nRs",
  },
  {
    title: "นักล่าสัตว์ป่า",
    author: "อาโอโกะ",
    image:
      "https://drive.google.com/thumbnail?id=1vYIARaAYnlqPsVZTWI7YiMDemjZG-nRs",
  },
  {
    title: "โต่วหลัว",
    author: "ต้า นายน้อยคนที่ 4",
    image:
      "https://drive.google.com/thumbnail?id=1vYIARaAYnlqPsVZTWI7YiMDemjZG-nRs",
  },
  {
    title: "ความเข้าใจของฉันท้าทายสวรรค์",
    author: "อาทิซซี่",
    image:
      "https://drive.google.com/thumbnail?id=1vYIARaAYnlqPsVZTWI7YiMDemjZG-nRs",
  },
  {
    title: "ถามเรื่องอายุยืนยาว",
    author: "สังเกต ซู",
    image:
      "https://drive.google.com/thumbnail?id=1vYIARaAYnlqPsVZTWI7YiMDemjZG-nRs",
  },
  {
    title: "ความหวังใหม่",
    author: "เฉิน หมิง",
    image:
      "https://drive.google.com/thumbnail?id=1vYIARaAYnlqPsVZTWI7YiMDemjZG-nRs",
  },
  {
    title: "การกลับมาของราชา",
    author: "หวัง หลง",
    image:
      "https://drive.google.com/thumbnail?id=1vYIARaAYnlqPsVZTWI7YiMDemjZG-nRs",
  },
  {
    title: "สืบทอดสมบัติ",
    author: "ซุน หงอคง",
    image:
      "https://drive.google.com/thumbnail?id=1vYIARaAYnlqPsVZTWI7YiMDemjZG-nRs",
  },
  {
    title: "สุดยอดนักรบ",
    author: "หลี่ เสี่ยวหลง",
    image:
      "https://drive.google.com/thumbnail?id=1vYIARaAYnlqPsVZTWI7YiMDemjZG-nRs",
  },
];

function Pagenovel() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
const onck = ()=>{
  
}
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Container>
        <SearchContainer>
          <TextField
            sx={{ margin: 5 }}
            fullWidth
            label="ค้นหา"
            variant="outlined"
          />
        </SearchContainer>

        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category} onClick={onck} />
          ))}
        </Tabs>
      </Container>
      <Box sx={{ p: 2, width: "85%", marginLeft: "5%" }}>
        <Grid container spacing={3} style={{ marginTop: "10px" }}>
          {novels.map((novel, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <StyledCard>
                <CardActionArea href="/novel">
                  <CardMedia
                    component="img"
                    alt={novel.title}
                    height="150"
                    image={novel.image}
                    title={novel.title}
                  />
                </CardActionArea>
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <CustomLink href="/novel">{novel.title}</CustomLink>
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px", // เพิ่มระยะห่างของข้อมูล
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ width: "50%" }}
                    >
                      <ButtonBase href="/author">{novel.author}</ButtonBase>
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h7"
                      component="div"
                      style={{ width: "30%" }}
                    >
                      <CustomLink href="/novel-category">
                        {novel.title}
                      </CustomLink>
                    </Typography>
                    <Typography
                      sx={{ margin: "0 8px" }}
                      style={{ width: "20%" }}
                    >
                      Status: Completed
                    </Typography>
                  </Box>

                  <Typography variant="h7">Introduction</Typography>
                  <CustomButtonB href="/Content">
                    123 สวนสาธารณะ สวนสาธารณะ สวนสาธารณะสวนสาธารณะ สวนสาธารณะ
                    สวนสาธารณะ สวนสาธารณะ สวนสาธารณะ สวนสาธารณะสวนสาธารณะ
                    สวนสาธารณะ สวนสาธารณะ สวนสาธารณะสวนสาธารณะ สวนสาธารณะ
                    สวนสาธารณะ สวนสาธารณะ สวนสาธารณะ สวนสาธารณะสวนสาธารณะ
                    สวนสาธารณะ สวนสาธารณะ สวนสาธารณะสวนสาธารณะ สวนสาธารณะ
                    สวนสาธารณะ สวนสาธารณะ สวนสาธารณะ สวนสาธารณะสวนสาธารณะ
                    สวนสาธารณะ สวนสาธารณะ สวนสาธารณะสวนสาธารณะ สวนสาธารณะ
                    สวนสาธารณะ สวนสาธารณะ สวนสาธารณะ สวนสาธารณะสวนสาธารณะ
                    สวนสาธารณะ สวนสาธารณะ สวนสาธารณะสวนสาธารณะ สวนสาธารณะ
                    สวนสาธารณะ สวนสาธารณะ สวนสาธารณะ สวนสาธารณะสวนสาธารณะ
                  </CustomButtonB>
                </CardContent>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "1px solid #ccc", // เพิ่มเส้นแบ่งระหว่างข้อมูล
                    paddingTop: "8px",
                    maxWidth: "100%", // เพิ่มระยะห่างด้านบน
                  }}
                >
                  <Typography sx={chapter1}>
                    <ButtonBase href="/Content">
                      Chapter: 1500 chapter
                    </ButtonBase>
                  </Typography>
                  <Typography sx={chapter2}>Update time: 12/2/2020</Typography>
                  <Typography sx={chapter3}>
                    <MenuBookIcon />
                    1000 Chapters
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Pagenovel;
