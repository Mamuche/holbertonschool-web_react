/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var printTeacher = function (firstName, lastName) {
    return (firstName.charAt(0) + ". " + lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWFBLElBQU0sWUFBWSxHQUF5QixVQUFDLFNBQWlCLEVBQUUsUUFBZ0I7SUFDOUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFjRjtJQUlFLHNCQUFZLFNBQWlCLEVBQUUsUUFBZ0I7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDQyxPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0ZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcblx0eWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG5cdGxvY2F0aW9uOiBzdHJpbmc7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuXHRudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gKGZpcnN0TmFtZS5jaGFyQXQoMCkgKyBcIi4gXCIgKyBsYXN0TmFtZSlcbn07XG5cbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XG5cdChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykgOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdHVkZW50Q2xhc3NDbGFzcyB7XG5cdHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcblx0ZGlzcGxheU5hbWUoKTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzY29uc3RydWN0b3Ige1xuXHRuZXcgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogU3R1ZGVudENsYXNzQ2xhc3M7XG59XG5jbGFzcyBTdHVkZW50Q2xhc3Mge1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblxuXHRcdGNvbnN0cnVjdG9yKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSB7XG5cdFx0XHR0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcblx0XHRcdHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcblx0XHR9XG5cblx0XHR3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIFwiQ3VycmVudGx5IHdvcmtpbmdcIjtcblx0XHR9XG5cblx0XHRkaXNwbGF5TmFtZSgpOnN0cmluZyB7XG5cdFx0XHRyZXR1cm4gdGhpcy5maXJzdE5hbWU7XG5cdFx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9