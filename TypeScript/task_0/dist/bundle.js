/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var student1 = {
    firstName: "Pouet",
    lastName: "Clarisse",
    age: 27,
    location: "Cenon",
};
var student2 = {
    firstName: "Pouet",
    lastName: "Alex",
    age: 28,
    location: "Bordeaux",
};
var studentsList = [student1, student2];
var table = document.createElement("table");
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell();
    var locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQU9BLElBQU0sUUFBUSxHQUFZO0lBQ3pCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLE9BQU87Q0FDakI7QUFDRCxJQUFNLFFBQVEsR0FBWTtJQUN6QixTQUFTLEVBQUUsT0FBTztJQUNsQixRQUFRLEVBQUUsTUFBTTtJQUNoQixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxVQUFVO0NBQ3BCO0FBQ0QsSUFBTSxZQUFZLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFMUMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU5QyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztJQUM1QixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QyxhQUFhLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDOUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFN0dWRlbnQge1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0YWdlOiBudW1iZXI7XG5cdGxvY2F0aW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IHN0dWRlbnQxOiBTdHVkZW50ID0ge1xuXHRmaXJzdE5hbWU6IFwiUG91ZXRcIixcblx0bGFzdE5hbWU6IFwiQ2xhcmlzc2VcIixcblx0YWdlOiAyNyxcblx0bG9jYXRpb246IFwiQ2Vub25cIixcbn1cbmNvbnN0IHN0dWRlbnQyOiBTdHVkZW50ID0ge1xuXHRmaXJzdE5hbWU6IFwiUG91ZXRcIixcblx0bGFzdE5hbWU6IFwiQWxleFwiLFxuXHRhZ2U6IDI4LFxuXHRsb2NhdGlvbjogXCJCb3JkZWF1eFwiLFxufVxuY29uc3Qgc3R1ZGVudHNMaXN0ID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07XG5cbmNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuXG5zdHVkZW50c0xpc3QuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuXHRjb25zdCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcblx0Y29uc3QgZmlyc3ROYW1lQ2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG5cdGNvbnN0IGxvY2F0aW9uQ2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG5cdGZpcnN0TmFtZUNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmZpcnN0TmFtZTtcblx0bG9jYXRpb25DZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5sb2NhdGlvbjtcbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhYmxlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==