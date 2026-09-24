// Exact decisions for all proposals that are not default 'Accepted'
// Directly extracted from the authentic OARI Concept Notes Screening Document (Pages 1-145)
import { DecisionType } from '../types/dashboard';

export const NON_ACCEPTED_DECISIONS: Record<number, DecisionType> = {
  // Crop (1-452)
  47: 'Rejected',
  48: 'Rejected',
  51: 'Rejected',
  131: 'Rejected',
  140: 'Rejected',
  150: 'Rejected',
  151: 'Rejected',
  189: 'Rejected',
  197: 'Rejected',
  200: 'Rejected',
  229: 'Rejected',
  260: 'Rejected',
  264: 'Rejected',
  286: 'Rejected',
  303: 'Rejected',
  314: 'Rejected',
  317: 'Pended',
  323: 'Rejected',
  324: 'Rejected',
  329: 'Rejected',
  330: 'Rejected',
  402: 'Rejected',
  425: 'Rejected',
  427: 'Rejected',
  429: 'Rejected',
  431: 'Rejected',

  // Livestock (453-792)
  // Page 29:
  453: 'Accepted with modification',
  454: 'Accepted with modification',
  455: 'Accepted with modification',
  456: 'Accepted with modification',
  457: 'Accepted with modification',
  458: 'Accepted with modification',
  // Page 30:
  459: 'Accepted with modification',
  460: 'Accepted with modification',
  461: 'Accepted with modification',
  462: 'Accepted with modification',
  463: 'Accepted with modification',
  464: 'Accepted with modification',
  465: 'Accepted with modification',
  466: 'Accepted with modification',
  // Page 33:
  491: 'Rejected', 492: 'Rejected', 493: 'Rejected', 494: 'Rejected', 495: 'Rejected', 496: 'Rejected', 497: 'Rejected', 498: 'Rejected',
  // Page 34:
  499: 'Rejected', 500: 'Rejected', 501: 'Rejected', 502: 'Rejected', 503: 'Rejected', 504: 'Rejected', 505: 'Rejected', 506: 'Rejected', 507: 'Rejected',
  // Page 35:
  508: 'Rejected', 509: 'Rejected', 510: 'Rejected', 511: 'Rejected', 512: 'Rejected', 513: 'Rejected', 514: 'Rejected', 515: 'Rejected', 516: 'Rejected',
  // Page 36:
  517: 'Rejected', 518: 'Rejected', 519: 'Rejected', 520: 'Rejected', 521: 'Rejected', 522: 'Rejected', 523: 'Rejected', 524: 'Rejected', 525: 'Rejected', 526: 'Rejected',
  // Page 37:
  527: 'Rejected', 528: 'Rejected', 529: 'Rejected', 530: 'Rejected', 531: 'Rejected', 532: 'Rejected', 533: 'Rejected', 534: 'Rejected', 535: 'Rejected',
  // Page 38:
  547: 'Rejected', 548: 'Rejected', 549: 'Rejected',
  // Page 39:
  550: 'Rejected', 551: 'Rejected', 552: 'Rejected', 553: 'Pended',
  554: 'Accepted with modification', 555: 'Accepted with modification',
  // Page 40:
  560: 'Conditionally Accepted',
  561: 'Rejected', 562: 'Rejected', 563: 'Rejected', 564: 'Rejected', 565: 'Rejected',
  // Page 41:
  568: 'Rejected', 569: 'Rejected', 570: 'Rejected',
  // Page 42:
  583: 'Accepted with modification', 584: 'Accepted with modification', 585: 'Accepted with modification',
  588: 'Rejected', 589: 'Rejected', 590: 'Rejected', 591: 'Rejected', 592: 'Rejected',
  // Page 43:
  593: 'Rejected',
  599: 'Rejected', 600: 'Rejected',
  // Page 44:
  614: 'Rejected', 615: 'Rejected', 616: 'Rejected', 617: 'Rejected', 618: 'Rejected',
  // Page 45:
  619: 'Rejected', 620: 'Rejected', 621: 'Rejected', 622: 'Rejected', 623: 'Rejected', 624: 'Rejected',
  // Page 46:
  636: 'Rejected', 637: 'Rejected', 638: 'Rejected', 639: 'Rejected', 640: 'Rejected',
  641: 'Accepted with modification',
  645: 'Rejected', 646: 'Rejected',
  // Page 47:
  647: 'Rejected', 648: 'Rejected', 649: 'Rejected',
  // Page 49:
  674: 'Rejected', 675: 'Rejected', 676: 'Rejected', 677: 'Rejected', 678: 'Rejected',
  679: 'Accepted with modification',
  680: 'Rejected',
  681: 'Accepted with modification',
  // Page 50:
  697: 'Rejected',
  // Page 51:
  698: 'Rejected', 699: 'Rejected', 700: 'Rejected', 701: 'Rejected', 702: 'Rejected',
  710: 'Rejected',
  // Page 52:
  711: 'Rejected',
  712: 'Accepted with modification',
  716: 'Rejected', 717: 'Rejected', 718: 'Rejected', 719: 'Rejected', 720: 'Rejected', 721: 'Rejected',
  // Page 53:
  729: 'Rejected', 730: 'Rejected', 731: 'Rejected',
  // Page 54:
  745: 'Rejected', 746: 'Rejected', 747: 'Rejected', 748: 'Rejected', 749: 'Rejected', 750: 'Rejected',
  // Page 55:
  751: 'Rejected', 752: 'Rejected', 753: 'Rejected', 754: 'Rejected', 755: 'Rejected', 756: 'Rejected',
  757: 'Accepted with modification',
  // Page 56:
  768: 'Conditionally Accepted',
  769: 'Rejected', 770: 'Rejected', 771: 'Rejected', 772: 'Rejected',
  // Page 57:
  773: 'Rejected', 774: 'Rejected', 775: 'Rejected', 776: 'Rejected',
  777: 'Rejected', 778: 'Rejected', 779: 'Rejected',
  780: 'Accepted with modification', 781: 'Accepted with modification', 782: 'Accepted with modification',
  // Page 58:
  784: 'Rejected', 785: 'Rejected',
  786: 'Accepted with modification', 787: 'Accepted with modification',
  789: 'Rejected', 790: 'Rejected', 791: 'Rejected', 792: 'Rejected',

  // SEAE (793-975)
  799: 'Rejected',
  808: 'Conditionally Accepted',
  811: 'Conditionally Accepted',
  814: 'Rejected', 816: 'Rejected', 817: 'Rejected', 818: 'Rejected', 819: 'Rejected',
  821: 'Rejected', 822: 'Rejected',
  831: 'Rejected', 833: 'Rejected', 834: 'Conditionally Accepted', 835: 'Rejected',
  840: 'Conditionally Accepted', 844: 'Conditionally Accepted', 845: 'Rejected', 846: 'Conditionally Accepted', 847: 'Conditionally Accepted',
  851: 'Rejected',
  859: 'Conditionally Accepted', 860: 'Conditionally Accepted',
  861: 'Conditionally Accepted', 862: 'Conditionally Accepted',
  871: 'Conditionally Accepted', 873: 'Conditionally Accepted', 874: 'Conditionally Accepted',
  875: 'Rejected', 877: 'Rejected', 880: 'Rejected', 881: 'Rejected',
  893: 'Rejected', 894: 'Rejected', 895: 'Rejected',
  898: 'Rejected', 899: 'Rejected',
  904: 'Conditionally Accepted', 905: 'Conditionally Accepted', 906: 'Conditionally Accepted',
  907: 'Rejected', 909: 'Rejected',
  917: 'Rejected',
  934: 'Rejected', 936: 'Conditionally Accepted', 938: 'Rejected',
  945: 'Conditionally Accepted', 947: 'Rejected', 949: 'Rejected',
  952: 'Conditionally Accepted', 953: 'Rejected', 954: 'Rejected',
  962: 'Conditionally Accepted', 963: 'Conditionally Accepted', 964: 'Conditionally Accepted',
  968: 'Rejected', 974: 'Rejected',

  // Protection (976-1133)
  978: 'Rejected', 979: 'Rejected', 983: 'Rejected', 990: 'Rejected',
  1007: 'Rejected', 1014: 'Rejected', 1015: 'Merged',
  1017: 'Rejected', 1024: 'Merged', 1025: 'Merged',
  1030: 'Rejected', 1031: 'Rejected',
  1043: 'Rejected', 1045: 'Rejected', 1046: 'Rejected',
  1050: 'Rejected', 1052: 'Rejected', 1058: 'Rejected', 1059: 'Rejected', 1061: 'Rejected', 1064: 'Rejected',
  1070: 'Rejected', 1072: 'Rejected', 1074: 'Rejected', 1079: 'Rejected', 1081: 'Rejected',
  1086: 'Rejected', 1090: 'Rejected', 1092: 'Rejected',
  1095: 'Rejected', 1096: 'Rejected', 1099: 'Rejected',
  1102: 'Rejected', 1105: 'Rejected',
  1112: 'Rejected', 1113: 'Rejected', 1117: 'Rejected',
  1129: 'Rejected', 1131: 'Rejected', 1132: 'Rejected',

  // Biotechnology (1134-1163)
  1141: 'Pended', 1142: 'Pended', 1143: 'Pended', 1144: 'Pended', 1145: 'Pended',
  1146: 'Pended', 1147: 'Pended', 1148: 'Pended', 1149: 'Pended', 1150: 'Pended',
  1151: 'Pended', 1152: 'Pended',
  1153: 'Rejected', 1154: 'Rejected', 1155: 'Rejected', 1156: 'Rejected', 1157: 'Rejected',
  1158: 'Rejected', 1159: 'Rejected', 1160: 'Rejected', 1161: 'Rejected', 1162: 'Rejected',
  1163: 'Rejected',

  // Food Science (1164-1192)
  1169: 'Merged', 1170: 'Merged',
  1172: 'Rejected', 1175: 'Rejected', 1180: 'Rejected',
  1183: 'Merged', 1188: 'Rejected',

  // A/Engineering (1193-1406)
  1194: 'Rejected', 1195: 'Rejected', 1198: 'Rejected', 1199: 'Conditionally Accepted', 1200: 'Rejected', 1201: 'Rejected',
  1203: 'Rejected', 1206: 'Conditionally Accepted', 1208: 'Conditionally Accepted',
  1210: 'Rejected', 1212: 'Rejected', 1213: 'Rejected', 1214: 'Conditionally Accepted', 1216: 'Rejected', 1217: 'Conditionally Accepted', 1218: 'Rejected', 1219: 'Rejected',
  1220: 'Rejected', 1221: 'Rejected', 1223: 'Rejected', 1224: 'Rejected', 1225: 'Conditionally Accepted', 1226: 'Conditionally Accepted', 1227: 'Conditionally Accepted', 1228: 'Rejected', 1229: 'Rejected', 1231: 'Rejected', 1232: 'Rejected', 1233: 'Rejected', 1234: 'Conditionally Accepted',
  1235: 'Rejected', 1236: 'Rejected', 1239: 'Rejected', 1240: 'Rejected', 1242: 'Conditionally Accepted', 1243: 'Rejected', 1244: 'Conditionally Accepted', 1245: 'Rejected', 1247: 'Rejected', 1248: 'Rejected',
  1251: 'Rejected', 1252: 'Rejected', 1256: 'Rejected', 1257: 'Rejected', 1258: 'Rejected', 1259: 'Rejected', 1260: 'Rejected', 1262: 'Rejected', 1263: 'Rejected', 1264: 'Rejected',
  1265: 'Conditionally Accepted', 1267: 'Rejected', 1268: 'Rejected', 1269: 'Rejected', 1270: 'Conditionally Accepted', 1271: 'Rejected', 1272: 'Rejected', 1273: 'Rejected', 1275: 'Rejected', 1276: 'Conditionally Accepted', 1277: 'Rejected', 1279: 'Rejected',
  1284: 'Rejected', 1285: 'Conditionally Accepted', 1287: 'Conditionally Accepted', 1290: 'Rejected', 1294: 'Rejected', 1296: 'Rejected', 1298: 'Rejected', 1301: 'Rejected',
  1305: 'Rejected', 1306: 'Conditionally Accepted', 1307: 'Conditionally Accepted', 1308: 'Rejected', 1309: 'Rejected', 1311: 'Rejected', 1312: 'Rejected', 1313: 'Conditionally Accepted', 1314: 'Rejected',
  1320: 'Rejected', 1321: 'Rejected', 1324: 'Rejected', 1325: 'Conditionally Accepted', 1328: 'Rejected',
  1335: 'Rejected', 1339: 'Rejected', 1340: 'Conditionally Accepted', 1341: 'Rejected', 1342: 'Conditionally Accepted', 1344: 'Rejected', 1345: 'Rejected', 1348: 'Rejected',
  1350: 'Rejected', 1355: 'Rejected', 1359: 'Rejected', 1361: 'Conditionally Accepted', 1364: 'Rejected', 1365: 'Conditionally Accepted',
  1368: 'Rejected', 1369: 'Rejected', 1370: 'Conditionally Accepted', 1372: 'Rejected', 1374: 'Rejected', 1375: 'Rejected', 1376: 'Rejected', 1377: 'Rejected', 1378: 'Conditionally Accepted',
  1381: 'Rejected', 1383: 'Rejected', 1384: 'Rejected', 1385: 'Rejected', 1386: 'Rejected', 1388: 'Rejected', 1390: 'Rejected', 1391: 'Rejected',
  1395: 'Rejected', 1396: 'Conditionally Accepted', 1397: 'Rejected', 1398: 'Rejected', 1399: 'Rejected', 1401: 'Rejected', 1403: 'Rejected', 1404: 'Rejected', 1405: 'Rejected', 1406: 'Rejected',

  // Coffee and Tea (1407-1466)
  1407: 'Accepted with modification',
  1409: 'Rejected', 1412: 'Conditionally Accepted', 1413: 'Rejected', 1414: 'Rejected', 1415: 'Conditionally Accepted', 1416: 'Conditionally Accepted',
  1418: 'Conditionally Accepted',
  1423: 'Rejected', 1424: 'Rejected', 1425: 'Rejected', 1429: 'Rejected', 1431: 'Rejected',
  1436: 'Rejected', 1437: 'Rejected', 1438: 'Rejected', 1439: 'Accepted with modification', 1440: 'Rejected', 1442: 'Accepted with modification', 1443: 'Accepted with modification', 1444: 'Rejected',
  1447: 'Merged', 1449: 'Rejected', 1450: 'Conditionally Accepted', 1451: 'Rejected', 1452: 'Rejected', 1453: 'Rejected', 1454: 'Rejected', 1455: 'Rejected', 1456: 'Conditionally Accepted', 1457: 'Rejected', 1458: 'Conditionally Accepted',
  1459: 'Rejected', 1461: 'Rejected', 1463: 'Rejected', 1466: 'Merged',

  // Natural Resource (1467-1734)
  1468: 'Rejected', 1480: 'Rejected', 1482: 'Conditionally Accepted', 1483: 'Conditionally Accepted', 1484: 'Conditionally Accepted', 1485: 'Rejected',
  1491: 'Rejected', 1492: 'Rejected', 1493: 'Rejected', 1494: 'Rejected', 1495: 'Conditionally Accepted', 1500: 'Rejected', 1501: 'Rejected', 1502: 'Rejected', 1503: 'Rejected',
  1511: 'Rejected', 1513: 'Conditionally Accepted', 1514: 'Conditionally Accepted', 1516: 'Conditionally Accepted', 1518: 'Rejected', 1519: 'Rejected', 1520: 'Rejected', 1521: 'Conditionally Accepted', 1522: 'Rejected', 1524: 'Conditionally Accepted', 1525: 'Rejected', 1526: 'Conditionally Accepted', 1528: 'Conditionally Accepted', 1529: 'Conditionally Accepted',
  1536: 'Rejected', 1537: 'Conditionally Accepted', 1542: 'Conditionally Accepted', 1543: 'Conditionally Accepted', 1544: 'Rejected', 1545: 'Conditionally Accepted',
  1546: 'Rejected', 1547: 'Rejected', 1548: 'Rejected', 1549: 'Rejected', 1553: 'Rejected', 1554: 'Rejected', 1555: 'Rejected', 1558: 'Rejected', 1560: 'Rejected',
  1564: 'Rejected', 1567: 'Conditionally Accepted', 1569: 'Rejected', 1571: 'Rejected', 1572: 'Rejected', 1578: 'Rejected', 1579: 'Rejected',
  1584: 'Rejected', 1586: 'Rejected', 1587: 'Rejected', 1589: 'Rejected', 1594: 'Rejected', 1595: 'Rejected',
  1600: 'Rejected', 1601: 'Rejected', 1603: 'Merged', 1604: 'Rejected', 1607: 'Merged', 1609: 'Rejected', 1614: 'Rejected',
  1619: 'Conditionally Accepted', 1623: 'Conditionally Accepted', 1635: 'Conditionally Accepted', 1637: 'Rejected', 1638: 'Rejected',
  1642: 'Rejected', 1643: 'Rejected', 1644: 'Rejected', 1645: 'Rejected', 1647: 'Rejected', 1648: 'Rejected', 1650: 'Rejected', 1653: 'Rejected', 1655: 'Rejected', 1656: 'Rejected',
  1660: 'Rejected', 1661: 'Rejected', 1662: 'Rejected', 1664: 'Rejected', 1665: 'Rejected', 1666: 'Rejected', 1667: 'Rejected',
  1670: 'Rejected', 1671: 'Rejected', 1676: 'Rejected',
  1680: 'Rejected', 1686: 'Rejected', 1688: 'Rejected', 1692: 'Rejected', 1693: 'Conditionally Accepted',
  1694: 'Conditionally Accepted', 1695: 'Conditionally Accepted', 1696: 'Rejected', 1697: 'Rejected', 1698: 'Rejected',
  1703: 'Conditionally Accepted', 1705: 'Rejected', 1708: 'Rejected', 1709: 'Rejected', 1710: 'Rejected', 1711: 'Conditionally Accepted', 1712: 'Rejected', 1713: 'Rejected',
  1717: 'Rejected', 1721: 'Rejected', 1722: 'Rejected', 1727: 'Rejected', 1728: 'Rejected', 1733: 'Rejected'
};
