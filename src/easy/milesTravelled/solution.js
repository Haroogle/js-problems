function distanceTravelled(timeTravelledInMinutes, averageMilesPerHour) {
  const timeTravelledInHours = timeTravelledInMinutes / 60;
  totalDistanceTravelled = timeTravelledInHours * averageMilesPerHour;
  return Math.round(totalDistanceTravelled);
}
console.log(distanceTravelled(120, 70));
