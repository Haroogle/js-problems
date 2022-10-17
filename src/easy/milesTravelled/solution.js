function distanceTravelled(timeTravelledInMinutes, averageMilesPerHour) {
  const timeTravelledInHours = timeTravelledInMinutes / 60;
  totalDistanceTravelled = timeTravelledInHours * averageMilesPerHour;
  return totalDistanceTravelled;
}
console.log(distanceTravelled(120, 70));
