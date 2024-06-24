import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  TextField,
  IconButton,
  Tabs,
  Tab,
  Box,
  ButtonBase,
  CardActionArea,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const AppContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
  margin: "0 auto",
  "@media (min-width: 1500px)": {
    padding: "0 100px", // เพิ่ม padding เมื่อหน้าจอกว้างกว่าหรือเท่ากับ 1500px เช่น 100px
  },
});

const SearchContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  margin: "20px 0",
});

const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const CustomLink = styled(ButtonBase)({
  color: "black",
  textDecoration: "none", // เพิ่มเส้นใต้ข้อความ
  "&:hover": {
    textDecoration: "underline", // เพิ่มเส้นใต้ข้อความเมื่อชี้
  },
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
const categories = ["ทุกหมวดหมู่", "นิยายโรแมนติก", "เวทมนตร์แฟนตาซี"];

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

  return (
    <div>
      <AppContainer>
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Dex novel
              </Typography>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Container>
            <SearchContainer>
              <TextField fullWidth label="ค้นหา" variant="outlined" />
            </SearchContainer>

            <Tabs value={selectedTab} onChange={handleTabChange} centered>
              {categories.map((category, index) => (
                <Tab key={index} label={category} />
              ))}
            </Tabs>

            <Box sx={{ p: 3 }}>
              <Grid container spacing={2} style={{ marginTop: "10px" }}>
                {novels.map((novel, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <StyledCard>
                      <CardActionArea href="/">
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
                            style={{ width: "70%" }}
                          >
                            <ButtonBase href="/profile">
                              {novel.author}
                            </ButtonBase>
                          </Typography>
                          <Typography>
                            {/* แก้ไขได้ตามความต้องการ */}
                          </Typography>
                        </Box>
                        <ButtonBase href="/Content">สวนสาธารณะ</ButtonBase>
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
                            Chapter: 1500  chapter
                          </ButtonBase>
                        </Typography>
                        <Typography sx={chapter2}>
                          <ButtonBase href="/Content">
                            Update time: 12/2/2020
                          </ButtonBase>
                        </Typography>
                        <Typography sx={chapter3}>
                          <ButtonBase href="/Content">
                            <MenuBookIcon />
                            1000 Chapters
                          </ButtonBase>
                        </Typography>
                      </CardContent>
                    </StyledCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </div>
      </AppContainer>
    </div>
  );
}

export default Pagenovel;
