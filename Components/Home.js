import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { Svg, Path, Circle } from 'react-native-svg';

export default function Home() {
    return (
    		<View style={styles.Home}>
      			<View style={styles.rectangle6}/>
      			<Text style={styles.akoma}>
        				{`Akoma`}
      			</Text>
      			{/* component basicToggleleft */}
      			<View style={styles.basicToggleleft}>
<Svg style={styles.icon} width="32" height="17" viewBox="0 0 32 17" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M22.6667 0.0416718H9.33333C4.17868 0.0416718 0 3.8286 0 8.5C0 13.1714 4.17868 16.9583 9.33333 16.9583H22.6667C27.8213 16.9583 32 13.1714 32 8.5C32 3.8286 27.8213 0.0416718 22.6667 0.0416718ZM2.66667 8.50001C2.66667 5.16328 5.65143 2.45834 9.33333 2.45834H22.6667C26.3486 2.45834 29.3333 5.16328 29.3333 8.50001C29.3333 11.8367 26.3486 14.5417 22.6667 14.5417H9.33333C5.65143 14.5417 2.66667 11.8367 2.66667 8.50001ZM9.33333 13.3333C6.38781 13.3333 4 11.1694 4 8.50001C4 5.83063 6.38781 3.66667 9.33333 3.66667C12.2789 3.66667 14.6667 5.83063 14.6667 8.50001C14.6667 11.1694 12.2789 13.3333 9.33333 13.3333ZM12 8.50001C12 9.83469 10.8061 10.9167 9.33333 10.9167C7.86057 10.9167 6.66667 9.83469 6.66667 8.50001C6.66667 7.16532 7.86057 6.08334 9.33333 6.08334C10.8061 6.08334 12 7.16532 12 8.50001Z" fill="black"/>
</Svg>

      			</View>
      			<View style={styles.rectangle7}/>
      			{/* component basicCircleplus */}
      			<View style={styles.basicCircleplus}>
<Svg style={styles._icon} width="49" height="49" viewBox="0 0 49 49" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M24.5 48.7917C11.0841 48.7917 0.208313 37.9159 0.208313 24.5C0.208313 11.0841 11.0841 0.208328 24.5 0.208328C37.9159 0.208328 48.7916 11.0841 48.7916 24.5C48.7916 37.9159 37.9159 48.7917 24.5 48.7917ZM24.5 44.375C35.4766 44.375 44.375 35.4767 44.375 24.5C44.375 13.5233 35.4766 4.62499 24.5 4.62499C13.5233 4.62499 4.62498 13.5233 4.62498 24.5C4.62498 35.4767 13.5233 44.375 24.5 44.375ZM35.5416 22.2917H26.7083V13.4583H22.2916V22.2917H13.4583V26.7083H22.2916V35.5417H26.7083V26.7083H35.5416V22.2917Z" fill="black"/>
</Svg>

      			</View>
      			<Text style={styles.creditScoreXXX}>
        				{`Credit Score\nXXX`}
      			</Text>
      			{/* Vigma RN:: can be replaced with <ArrowsRefreshcwalert  /> */}
      			<View style={styles.arrowsRefreshcwalert}>
<Svg style={styles.__icon} width="20" height="20" viewBox="0 0 20 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M10 2C12.3936 2 14.4465 3.0787 15.8069 5H14V7H19V2H17V3.27035C15.2749 1.18251 12.8042 0 10 0C4.47715 0 0 4.47715 0 10H2C2 5.58172 5.58172 2 10 2ZM10 18C7.60638 18 5.55354 16.9213 4.19306 15H6V13H1V18H3V16.7297C4.72511 18.8175 7.19577 20 10 20C15.5228 20 20 15.5228 20 10H18C18 14.4183 14.4183 18 10 18ZM10.0003 13.9983C10.5528 13.9983 11.0007 13.5506 11.0007 12.9983C11.0007 12.4461 10.5528 11.9983 10.0003 11.9983C9.44786 11.9983 9 12.4461 9 12.9983C9 13.5506 9.44786 13.9983 10.0003 13.9983ZM11.0036 4.99835H9.00295V10.9983H11.0036V4.99835Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <NotificationsBell  /> */}
      			<View style={styles.notificationsBell}>
<Svg style={styles.___icon} width="20" height="22" viewBox="0 0 20 22" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M17 9C17 4.94082 14.7616 2.1235 11.8654 1.27771C11.7605 1.00636 11.5948 0.7541 11.3695 0.54243C10.5997 -0.18081 9.40027 -0.18081 8.63051 0.54243C8.40572 0.753635 8.24021 1.00525 8.13531 1.27592C5.23535 2.11803 3 4.92919 3 9C3 11.6339 2.46898 13.1098 1.48596 14.1793C1.32161 14.3582 0.876316 14.7678 0.574677 15.0453L0.574652 15.0453L0.574646 15.0453L0.574499 15.0454C0.431865 15.1766 0.321381 15.2783 0.287965 15.3119L0 15.604V19.0141H6.08798C6.29384 20.0761 6.87009 20.7867 7.9122 21.4226C9.19414 22.2049 10.8059 22.2049 12.0878 21.4226C13.0075 20.8614 13.6241 19.9989 13.8743 19.0141H20V15.604L19.712 15.3119C19.6817 15.2812 19.5757 15.1834 19.437 15.0555C19.1363 14.7781 18.6823 14.3592 18.5154 14.1769C17.5317 13.1024 17 11.6246 17 9ZM11.7367 19.0141H8.17862C8.3199 19.2769 8.56071 19.4754 8.95402 19.7154C9.59627 20.1073 10.4037 20.1073 11.046 19.7154C11.3434 19.5339 11.5758 19.2937 11.7367 19.0141ZM17.0402 15.5274C17.2506 15.7573 17.7016 16.1774 18 16.4519V17.0141H2V16.4524C2.29607 16.1811 2.74843 15.7613 2.95849 15.5327C4.29422 14.0794 5 12.1178 5 9C5 5.21989 7.33277 3.01238 10 3.01238C12.6597 3.01238 15 5.23129 15 9C15 12.1078 15.706 14.07 17.0402 15.5274Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <ArrowsCirclechevrontop  /> */}
      			<View style={styles.arrowsCirclechevrontop}>
<Svg style={styles.____icon} width="22" height="22" viewBox="0 0 22 22" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM6.29289 12.2929L7.70711 13.7071L11 10.4142L14.2929 13.7071L15.7071 12.2929L11 7.58579L6.29289 12.2929Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <ArrowsCirclechevronbottom  /> */}
      			<View style={styles.arrowsCirclechevronbottom}>
<Svg style={styles._____icon} width="22" height="22" viewBox="0 0 22 22" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM15.7071 9.70711L14.2929 8.29289L11 11.5858L7.70711 8.29289L6.29289 9.70711L11 14.4142L15.7071 9.70711Z" fill="black"/>
</Svg>

      			</View>
      			<Text style={styles.sales}>
        				{`Sales `}
      			</Text>
      			<Text style={styles.expenses}>
        				{`Expenses`}
      			</Text>
      			<Text style={styles.xXXXX}>
        				{`XXX.XX`}
      			</Text>
      			<Text style={styles.xXXXXX}>
        				{`XX.XX (X.X%)`}
      			</Text>
      			<Text style={styles.mobileMoney}>
        				{`Mobile Money`}
      			</Text>
      			<Text style={styles.loans}>
        				{`Loans`}
      			</Text>
      			<Text style={styles.profitLoss}>
        				{`Profit & Loss`}
      			</Text>
      			<View style={styles.rectangle2}/>
<Svg style={styles.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" >
<Path d="M19.728 17.2913L15.8332 13.3971C15.6574 13.2214 15.4191 13.1237 15.1691 13.1237H14.5323C15.6105 11.7449 16.2512 10.0107 16.2512 8.12421C16.2512 3.63636 12.6142 0 8.12559 0C3.63698 0 0 3.63636 0 8.12421C0 12.612 3.63698 16.2484 8.12559 16.2484C10.0125 16.2484 11.747 15.6079 13.126 14.5298V15.1665C13.126 15.4165 13.2236 15.6547 13.3994 15.8305L17.2942 19.7246C17.6614 20.0918 18.2552 20.0918 18.6185 19.7246L19.7241 18.6193C20.0913 18.2521 20.0913 17.6584 19.728 17.2913ZM8.12559 13.1237C5.36367 13.1237 3.12523 10.8896 3.12523 8.12421C3.12523 5.36276 5.35977 3.12469 8.12559 3.12469C10.8875 3.12469 13.126 5.35885 13.126 8.12421C13.126 10.8857 10.8914 13.1237 8.12559 13.1237Z" fill="#5B5B5B"/>
</Svg>

      			<Text style={styles.search}>
        				{`Search `}
      			</Text>
      			<View style={styles.rectangle3}/>
      			<Text style={styles.sentnotification}>
        				{`Sent notification?`}
      			</Text>
<Svg style={styles.ellipse2} width="30" height="30" viewBox="0 0 30 30" fill="none" >
<Circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
</Svg>

      			{/* Vigma RN:: can be replaced with <BasicDownloadbold  /> */}
      			<View style={styles.basicDownloadbold}>
<Svg style={styles.______icon} width="20" height="20" viewBox="0 0 20 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M5 5V2C5 0.89543 5.89543 0 7 0H13C14.1046 0 15 0.89543 15 2V5V9H20L10 17.5847L0 9H5V5ZM13 2V5V9V11H14.2967L10 14.9505L5.70326 11H7V9V5V2H13ZM17 20C18.1046 20 19 19.1046 19 18H1C1 19.1046 1.89543 20 3 20H17Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <ArrowsCirclearrowtopright  /> */}
      			<View style={styles.arrowsCirclearrowtopright}>
<Svg style={styles._______icon} width="22" height="22" viewBox="0 0 22 22" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM7.70711 15.7071L13 10.4142V14H15V7H8V9H11.5858L6.29289 14.2929L7.70711 15.7071Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <ArrowsCirclearrowbottomright  /> */}
      			<View style={styles.arrowsCirclearrowbottomright}>
<Svg style={styles.________icon} width="22" height="22" viewBox="0 0 22 22" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22ZM11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM13 8V11.5858L7.70711 6.29289L6.29289 7.70711L11.5858 13H8V15H15V8H13Z" fill="black"/>
</Svg>

      			</View>
<Svg style={styles.ellipse3} width="30" height="30" viewBox="0 0 30 30" fill="none" >
<Circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
</Svg>

<Svg style={styles.ellipse4} width="30" height="30" viewBox="0 0 30 30" fill="none" >
<Circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
</Svg>

      			<Text style={styles.jA}>
        				{` JA`}
      			</Text>
      			{/* Vigma RN:: can be replaced with <ShoppingCart  /> */}
      			<View style={styles.shoppingCart}>
<Svg style={styles._________icon} width="21" height="20" viewBox="0 0 21 20" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M4.07125 2.00254C3.89365 2.00216 3.72244 2.02226 3.55976 2.06048C3.33674 1.56893 3.04216 1.12794 2.70711 0.792893C2.13843 0.224221 1.24155 0 0 0V2C0.758448 2 1.1949 2.10911 1.29289 2.20711C1.67086 2.58508 2 3.35306 2 4L2.01005 4.14142L2.98992 11.0005C1.35036 11.0856 0.0801976 12.3588 0.00122858 13.9504L0 15C0.0968212 16.6439 1.36275 17.9085 2.94324 17.9984L3.17026 17.9987C3.58174 19.1646 4.69331 20 6 20C7.30622 20 8.41746 19.1652 8.82929 18H11.1707C11.5825 19.1652 12.6938 20 14 20C15.6569 20 17 18.6569 17 17C17 15.3431 15.6569 14 14 14C12.6938 14 11.5825 14.8348 11.1707 16H8.82929C8.41746 14.8348 7.30622 14 6 14C4.69378 14 3.58254 14.8348 3.17071 16H3C2.49001 15.9694 2.03254 15.5124 1.99821 14.9401L2 14C2.02697 13.4813 2.48131 13.027 3.04955 12.9988L5.02369 12.9993L5.038 13H15.1169L15.2645 12.9532C16.0227 12.7126 16.6296 12.1416 16.917 11.4025L17.0224 11.194L17.3647 10.5159C17.7188 9.81392 18.0729 9.11076 18.418 8.4238C19.2632 6.74107 19.7948 5.67166 19.9125 5.40906C20.5171 4.06045 19.2924 3.02246 18.0407 3.00036L4.07125 2.00254ZM14.7694 11H5.11287C5.04866 10.9822 4.99973 10.9278 4.99015 10.86L4.01026 4.00073L17.8934 4.99493C17.6505 5.49032 17.2089 6.37516 16.6308 7.52609L16.6163 7.55493C16.2863 8.21186 15.9326 8.91405 15.579 9.61507L15.2371 10.2923L15.1076 10.5488L15.0588 10.6622C15.0065 10.8078 14.9028 10.9274 14.7694 11ZM14 18C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16C13.4477 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18ZM7 17C7 17.5523 6.55228 18 6 18C5.44772 18 5 17.5523 5 17C5 16.4477 5.44772 16 6 16C6.55228 16 7 16.4477 7 17Z" fill="black"/>
</Svg>

      			</View>
      			<Text style={styles.joshuaAkoma}>
        				{`Joshua Akoma`}
      			</Text>
      			<Text style={styles.suppliers}>
        				{`Suppliers`}
      			</Text>
      			<Text style={styles.xXXX}>
        				{`XX.XX`}
      			</Text>
      			<Text style={styles._xXXX}>
        				{`XX.XX`}
      			</Text>
      			<View style={styles.rectangle8}/>
      			<View style={styles.rectangle5}/>
      			<Text style={styles.unpaid}>
        				{`Unpaid`}
      			</Text>
      			<Text style={styles.paid}>
        				{`   Paid`}
      			</Text>
      			<View style={styles.rectangle19}/>
      			{/* Vigma RN:: can be replaced with <ChattingCommenttext  /> */}
      			<View style={styles.chattingCommenttext}>
<Svg style={styles.__________icon} width="26" height="26" viewBox="0 0 26 26" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M5.5 25.2553L13.1085 20.5H23C24.3807 20.5 25.5 19.3807 25.5 18V3C25.5 1.61929 24.3807 0.5 23 0.5H3C1.61929 0.5 0.5 1.61929 0.5 3V18C0.5 19.3807 1.61929 20.5 3 20.5H5.5V25.2553ZM12.3915 18L8 20.7447V18H3V3H23V18H12.3915ZM6.75 14.25V11.75H15.5V14.25H6.75ZM6.75 6.75V9.25H18V6.75H6.75Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <VariousSun  /> */}
      			<View style={styles.variousSun}>
<Svg style={styles.___________icon} width="28" height="28" viewBox="0 0 28 28" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M6.40859 21.5914L8.51416 27.244L14 24.7359L19.4859 27.244L21.5915 21.5914L27.2441 19.4859L24.7359 14L27.2441 8.51413L21.5915 6.40856L19.4859 0.755951L14 3.26409L8.51416 0.755951L6.40859 6.40856L0.755981 8.51413L3.26412 14L0.755981 19.4859L6.40859 21.5914ZM18.0812 23.8529L14 21.987L9.9188 23.8529L8.35236 19.6477L4.14708 18.0812L6.01302 14L4.14708 9.91877L8.35236 8.35233L9.9188 4.14705L14 6.01299L18.0812 4.14705L19.6477 8.35233L23.853 9.91877L21.987 14L23.853 18.0812L19.6477 19.6477L18.0812 23.8529ZM14 20.25C10.5482 20.25 7.75003 17.4518 7.75003 14C7.75003 10.5482 10.5482 7.75 14 7.75C17.4518 7.75 20.25 10.5482 20.25 14C20.25 17.4518 17.4518 20.25 14 20.25ZM17.75 14C17.75 16.0711 16.0711 17.75 14 17.75C11.929 17.75 10.25 16.0711 10.25 14C10.25 11.9289 11.929 10.25 14 10.25C16.0711 10.25 17.75 11.9289 17.75 14Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <BasicUser  /> */}
      			<View style={styles.basicUser}>
<Svg style={styles.____________icon} width="28" height="28" viewBox="0 0 28 28" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M14 27.75C6.40608 27.75 0.25 21.5939 0.25 14C0.25 6.40608 6.40608 0.25 14 0.25C21.5939 0.25 27.75 6.40608 27.75 14C27.75 21.5939 21.5939 27.75 14 27.75ZM23.2494 20.4058C24.5108 18.5879 25.25 16.3803 25.25 14C25.25 7.7868 20.2132 2.75 14 2.75C7.7868 2.75 2.75 7.7868 2.75 14C2.75 16.3803 3.48923 18.5879 4.75063 20.4058C6.15744 18.5476 9.46325 17.75 14 17.75C18.5367 17.75 21.8426 18.5476 23.2494 20.4058ZM21.4559 22.4247C21.09 21.1092 18.4617 20.25 14 20.25C9.53828 20.25 6.91 21.1092 6.54415 22.4247C8.52913 24.1827 11.1399 25.25 14 25.25C16.8601 25.25 19.4709 24.1827 21.4559 22.4247ZM14 17.75C11.2011 17.75 9 15.7842 9 11.5C9 8.6947 10.9739 6.5 14 6.5C17.0177 6.5 19 8.90197 19 11.75C19 15.8495 16.7726 17.75 14 17.75ZM11.5 11.5C11.5 14.3366 12.5228 15.25 14 15.25C15.4721 15.25 16.5 14.373 16.5 11.75C16.5 10.188 15.5196 9 14 9C12.4172 9 11.5 10.0198 11.5 11.5Z" fill="black"/>
</Svg>

      			</View>
      			{/* Vigma RN:: can be replaced with <BasicHome  /> */}
      			<View style={styles.basicHome}>
<Svg style={styles._____________icon} width="28" height="26" viewBox="0 0 28 26" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M6.36084 10.5L13.8625 2.99834L21.3642 10.5H21.3625V23H6.36252V10.5H6.36084ZM3.86252 12.9983L2.0165 14.8443L0.25 13.0778L12.0962 1.23161C13.0717 0.256129 14.6533 0.256129 15.6288 1.23161L27.475 13.0778L25.7085 14.8443L23.8625 12.9984V23C23.8625 24.3807 22.7432 25.5 21.3625 25.5H6.36252C4.98181 25.5 3.86252 24.3807 3.86252 23V12.9983Z" fill="black"/>
</Svg>

      			</View>
    		</View>
    )
}

const styles = StyleSheet.create({
  	Home: {
    flexShrink: 0,
    height: 566,
    width: 297,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 0
},
  	rectangle6: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    width: 298,
    height: 143,
    backgroundColor: "rgba(95, 152, 125, 1)"
},
  	akoma: {
    position: "absolute",
    flexShrink: 0,
    top: 8,
    left: 121,
    width: 83,
    height: 19,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0
},
  	basicToggleleft: {
    position: "absolute",
    flexShrink: 0,
    top: 116,
    bottom: 421,
    left: 265,
    right: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	icon: {
    position: "absolute",
    flexShrink: 0,
    top: 6,
    width: 32,
    height: 17,
    overflow: "visible"
},
  	rectangle7: {
    position: "absolute",
    flexShrink: 0,
    top: 145,
    left: 1,
    width: 296,
    height: 397,
    backgroundColor: "rgba(95, 152, 125, 0.6)"
},
  	basicCircleplus: {
    position: "absolute",
    flexShrink: 0,
    top: 414,
    bottom: 99,
    left: 221,
    right: 23,
    alignItems: "flex-start",
    rowGap: 0
},
  	_icon: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    left: 2,
    width: 49,
    height: 49,
    overflow: "visible"
},
  	creditScoreXXX: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    left: 2,
    width: 105,
    height: 28,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	arrowsRefreshcwalert: {
    position: "absolute",
    flexShrink: 0,
    top: 90,
    bottom: 452,
    left: 265,
    right: 8,
    alignItems: "flex-start",
    rowGap: 0
},
  	__icon: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    left: 2,
    width: 20,
    height: 20,
    overflow: "visible"
},
  	notificationsBell: {
    position: "absolute",
    flexShrink: 0,
    top: 4,
    bottom: 538,
    left: 269,
    right: 4,
    alignItems: "flex-start",
    rowGap: 0
},
  	___icon: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    left: 2,
    width: 20,
    height: 22,
    overflow: "visible"
},
  	arrowsCirclechevrontop: {
    position: "absolute",
    flexShrink: 0,
    top: 62,
    bottom: 480,
    left: 97,
    right: 176,
    alignItems: "flex-start",
    rowGap: 0
},
  	____icon: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    left: 1,
    width: 22,
    height: 22,
    overflow: "visible"
},
  	arrowsCirclechevronbottom: {
    position: "absolute",
    flexShrink: 0,
    top: 62,
    bottom: 480,
    left: 73,
    right: 200,
    alignItems: "flex-start",
    rowGap: 0
},
  	_____icon: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    left: 1,
    width: 22,
    height: 22,
    overflow: "visible"
},
  	sales: {
    position: "absolute",
    flexShrink: 0,
    top: 34,
    width: 67,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	expenses: {
    position: "absolute",
    flexShrink: 0,
    top: 34,
    left: 41,
    width: 67,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	xXXXX: {
    position: "absolute",
    flexShrink: 0,
    top: 62,
    width: 112,
    height: 40,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0
},
  	xXXXXX: {
    position: "absolute",
    flexShrink: 0,
    top: 87,
    width: 77,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	mobileMoney: {
    position: "absolute",
    flexShrink: 0,
    top: 34,
    left: 103,
    width: 76,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	loans: {
    position: "absolute",
    flexShrink: 0,
    top: 34,
    left: 188,
    width: 67,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	profitLoss: {
    position: "absolute",
    flexShrink: 0,
    top: 34,
    left: 230,
    width: 67,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle2: {
    position: "absolute",
    flexShrink: 0,
    top: 160,
    left: 2,
    width: 140,
    height: 25,
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderRadius: 5
},
  	searchIcon: {
    position: "absolute",
    flexShrink: 0,
    top: 162,
    right: 269,
    bottom: 384,
    left: 8,
    overflow: "visible"
},
  	search: {
    position: "absolute",
    flexShrink: 0,
    top: 165,
    left: 37,
    width: 37,
    height: 13,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle3: {
    position: "absolute",
    flexShrink: 0,
    top: 160,
    left: 199,
    width: 99,
    height: 25,
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderRadius: 5
},
  	sentnotification: {
    position: "absolute",
    flexShrink: 0,
    top: 165,
    left: 203,
    width: 91,
    height: 13,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	ellipse2: {
    position: "absolute",
    flexShrink: 0,
    top: 157,
    left: 167,
    width: 30,
    height: 30,
    overflow: "visible"
},
  	basicDownloadbold: {
    position: "absolute",
    flexShrink: 0,
    top: 161,
    bottom: 381,
    left: 170,
    right: 103,
    alignItems: "flex-start",
    rowGap: 0
},
  	______icon: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    left: 2,
    width: 20,
    height: 20,
    overflow: "visible"
},
  	arrowsCirclearrowtopright: {
    position: "absolute",
    flexShrink: 0,
    top: 258,
    bottom: 284,
    left: 270,
    right: 3,
    alignItems: "flex-start",
    rowGap: 0
},
  	_______icon: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    left: 1,
    width: 22,
    height: 22,
    overflow: "visible"
},
  	arrowsCirclearrowbottomright: {
    position: "absolute",
    flexShrink: 0,
    top: 229,
    bottom: 313,
    left: 269,
    right: 4,
    alignItems: "flex-start",
    rowGap: 0
},
  	________icon: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    left: 1,
    width: 22,
    height: 22,
    overflow: "visible"
},
  	ellipse3: {
    position: "absolute",
    flexShrink: 0,
    top: 221,
    left: 2,
    width: 30,
    height: 30,
    overflow: "visible"
},
  	ellipse4: {
    position: "absolute",
    flexShrink: 0,
    top: 257,
    left: 2,
    width: 30,
    height: 30,
    overflow: "visible"
},
  	jA: {
    position: "absolute",
    flexShrink: 0,
    top: 228,
    left: 7,
    width: 26,
    height: 22,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0
},
  	shoppingCart: {
    position: "absolute",
    flexShrink: 0,
    top: 260,
    bottom: 282,
    left: 5,
    right: 268,
    alignItems: "flex-start",
    rowGap: 0
},
  	_________icon: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    left: 2,
    width: 20,
    height: 20,
    overflow: "visible"
},
  	joshuaAkoma: {
    position: "absolute",
    flexShrink: 0,
    top: 228,
    left: 35,
    width: 112,
    height: 23,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0
},
  	suppliers: {
    position: "absolute",
    flexShrink: 0,
    top: 261,
    left: 35,
    width: 112,
    height: 23,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "400",
    letterSpacing: 0
},
  	xXXX: {
    position: "absolute",
    flexShrink: 0,
    top: 225,
    left: 164,
    width: 39,
    height: 14,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	_xXXX: {
    position: "absolute",
    flexShrink: 0,
    top: 260,
    left: 165,
    width: 39,
    height: 14,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0
},
  	rectangle8: {
    position: "absolute",
    flexShrink: 0,
    top: 229,
    left: 215,
    width: 52,
    height: 18,
    backgroundColor: "rgba(217, 217, 217, 1)",
    shadowOffset: {
        width: 0,
        height: 4
    },
    shadowRadius: 4,
    shadowColor: "rgb(0, 0, 0)",
    shadowOpacity: 0.25
},
  	rectangle5: {
    position: "absolute",
    flexShrink: 0,
    top: 260,
    left: 215,
    width: 52,
    height: 18,
    backgroundColor: "rgba(217, 217, 217, 1)",
    shadowOffset: {
        width: 0,
        height: 4
    },
    shadowRadius: 4,
    shadowColor: "rgb(0, 0, 0)",
    shadowOpacity: 0.25
},
  	unpaid: {
    position: "absolute",
    flexShrink: 0,
    top: 230,
    left: 221,
    width: 39,
    height: 14,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0
},
  	paid: {
    position: "absolute",
    flexShrink: 0,
    top: 261,
    left: 221,
    width: 39,
    height: 14,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Inter",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0
},
  	rectangle19: {
    position: "absolute",
    flexShrink: 0,
    top: 529,
    left: 1,
    width: 297,
    height: 37,
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderRadius: 10
},
  	chattingCommenttext: {
    position: "absolute",
    flexShrink: 0,
    top: 529,
    bottom: 7,
    left: 230,
    right: 37,
    alignItems: "flex-start",
    rowGap: 0
},
  	__________icon: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    left: 3,
    width: 25,
    height: 25,
    overflow: "visible"
},
  	variousSun: {
    position: "absolute",
    flexShrink: 0,
    top: 529,
    bottom: 7,
    left: 167,
    right: 100,
    alignItems: "flex-start",
    rowGap: 0
},
  	___________icon: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    left: 2,
    width: 26,
    height: 26,
    overflow: "visible"
},
  	basicUser: {
    position: "absolute",
    flexShrink: 0,
    top: 529,
    bottom: 7,
    left: 104,
    right: 163,
    alignItems: "flex-start",
    rowGap: 0
},
  	____________icon: {
    position: "absolute",
    flexShrink: 0,
    top: 1,
    left: 1,
    width: 28,
    height: 28,
    overflow: "visible"
},
  	basicHome: {
    position: "absolute",
    flexShrink: 0,
    top: 529,
    bottom: 7,
    left: 41,
    right: 226,
    alignItems: "flex-start",
    rowGap: 0
},
  	_____________icon: {
    position: "absolute",
    flexShrink: 0,
    top: 3,
    left: 1,
    width: 27,
    height: 25,
    overflow: "visible"
}
})
