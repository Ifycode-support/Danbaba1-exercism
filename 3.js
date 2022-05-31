export function canExecuteFastAttack(knightIsAwake) {
return !KnightIsAwake;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
return prisonerIsAwake && !archerIsAwake;
}

export function canFreePrisoner( 
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
 ) {
return (petDogIsPresent && !archerIsAwake) || (prisonerIsAwake && !knightIsAwake && !archerIsAwake);
}
