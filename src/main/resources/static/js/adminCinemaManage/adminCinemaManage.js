$(document).ready(function () {
    const hallWrapper = $("#hall-card");
    const canSeeDayWrapper = $("#can-see-day-wrapper");
    mount(new ViewHall({}), hallWrapper);
    mount(new CanSeeDay({}), canSeeDayWrapper);
});