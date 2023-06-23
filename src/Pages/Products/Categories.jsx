// import React , { useState } from "react"
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Drawer from "@mui/material/Drawer";
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

// const Categories = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const data = [
//     {
//       cateImg: "",
//       cateName: "Fashion",
//     },
//     {
//       cateImg: "",
//       cateName: "Electronic",
//     },
//     {
//       cateImg: "",
//       cateName: "Cars",
//     },
//     {
//       cateImg: "",
//       cateName: "Home & Garden",
//     },
//     {
//       cateImg: "",
//       cateName: "Gifts",
//     },
//     {
//       cateImg: "",
//       cateName: "Music",
//     },
//     {
//       cateImg: "",
//       cateName: "Health & Beauty",
//     },
//     {
//       cateImg: "",
//       cateName: "Pets",
//     },
//     {
//       cateImg: "",
//       cateName: "Baby Toys",
//     },
//     {
//       cateImg: "",
//       cateName: "Groceries",
//     },
//     {
//       cateImg: "",
//       cateName: "Books",
//     },
//   ];

//   return (
//     <>
//       <div className='category'>
//         {data.map((value, index) => {
//           return (
//             <div className='box f_flex' key={index}>
//               <img src={value.cateImg} alt='' />
//               <span>{value.cateName}</span>
//             </div>
//           )
//         })}

//       <div className="navbar-menu-container">

//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       </div>

//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//            <List>

//              {data.map((item) => (
//                <ListItem key={item.text} disablePadding>
//                  <ListItemButton component="a" href={item.path}>
//                    <ListItemIcon>{item.icon}</ListItemIcon>
//                    <ListItemText primary={item.text} />
//                  </ListItemButton>
//                </ListItem>
//              ))}

//            </List>

// </Box>
//          </Drawer>

//     </>
//   )
// }

// export default Categories

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { Link, Outlet } from "react-router-dom";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";

const Categories = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Top Selling",
      
      path: "/",
    },
    {
      text: "Momo",

      path: "/",
    },
    {
      text: "Burger",

      path: "/",
    },
    {
      text: "Spring Roll",

      path: "/",
    },
    {
      text: "Appetizer",
      path: "/",
    },
    {
      text: "Beverage",

      path: "/",
    },
  ];
  return (
 

<>
<Navbar />
      <div
        className="sidebar border-top border-end bg-white .d-none .d-sm-block .d-md-none"
      >
        
        <ul className="sidebar-nav">
        <div className="nav-link border-bottom border-dark">
              <span>Categories</span>
            </div>
          
            <Link className="nav-link border-bottom border-dark" to="/">
              <span>Top Selling</span>
            </Link>
          
       
            <Link className="nav-link border-bottom border-dark" to="/">
              <span>Momo</span>
            </Link>
        
          
            <Link className="nav-link border-bottom border-dark" to="/">
              <span>Burger</span>
            </Link>
          
       
            <Link className="nav-link border-bottom border-dark" to="/">
              <span>Spring Roll</span>
            </Link>
         
          
            <Link className="nav-link border-bottom border-dark" to="/">
              <span>Appetizer</span>
            </Link>
        
          
            <Link className="nav-link border-bottom border-dark" to="/">
              <span className="navTabs">Beverage</span>
            </Link>
          
        </ul>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineSquaresPlus onClick={() => setOpenMenu(true)} />Categories
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="left">
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />
        </Box>
      </Drawer>
      <Outlet />
   </>
  );
};

export default Categories;
