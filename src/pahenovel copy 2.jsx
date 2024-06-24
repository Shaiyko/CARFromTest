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
width: "100%", // ขยายความกว้างเต็มที่
margin: "0 auto", // จัดกึ่งกลาง
});

const SearchContainer = styled("div")({
display: "flex",
justifyContent: "center",
margin: "20px 0",
});

const StyledCard = styled(Card)({
height: "100%",
});

const CustomLink = styled(ButtonBase)({
color: "black",
});

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

export default function Pagenovel2() {
const [selectedTab, setSelectedTab] = React.useState(0);

const handleTabChange = (event, newValue) => {
setSelectedTab(newValue);
};

return (
  <AppContainer>
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

    <Container>
      <SearchContainer>
        <TextField fullWidth label="ค้นหา" variant="outlined" />
      </SearchContainer>
      <StyledCard>
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        {categories.map((category, index) => (
          <Tab key={index} label={category} />
        ))}
      </Tabs>
</StyledCard>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={6} style={{ marginTop: "10px" }}>
          {novels.map((novel, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <StyledCard>
                <CardActionArea href="/">
                  <CardMedia
                    component="img"
                    alt={novel.title}
                    height="150"
                    image={novel.image} // ใช้รูปภาพที่ต้องการ
                    title={novel.title}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <CustomLink href="/novel">{novel.title}</CustomLink>
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        margin: "0 8px",
                        whiteSpace: "pre-line",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "70%",
                      }}
                    >
                      <ButtonBase href="/profile">
                        {novel.author}
                        cscaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                      </ButtonBase>
                    </Typography>
                    <Typography sx={{ margin: "0 8px" }} href="/Content">
                      Status: Completed
                    </Typography>
                  </Box>
                  <ButtonBase sx={{ margin: "0 8px" }} href="/Content">
                    สวนสาธารณะ
                  </ButtonBase>
                </CardContent>
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Typography
                    sx={{
                      margin: "0 8px",
                      whiteSpace: "pre-line",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "50%",
                    }}
                  >
                    <ButtonBase href="/Content">
                      Chapter: 1500sssssssddddddddddddddddddddddddddddddddd
                    </ButtonBase>
                  </Typography>
                  <Typography
                    sx={{
                      margin: "0 8px",
                      whiteSpace: "pre-line",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "25%",
                    }}
                  >
                    <ButtonBase href="/Content">
                      ที่ทำงาน ddddddddd
                    </ButtonBase>
                  </Typography>
                  <Typography
                    sx={{
                      margin: "0 8px",
                      whiteSpace: "pre-line",
                      width: "25%",
                    }}
                  >
                    <Typography href="/Content">
                      <MenuBookIcon />
                      1000 Chapters
                    </Typography>
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </AppContainer>
);
}