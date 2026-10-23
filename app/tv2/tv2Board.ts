/** TV2 grid cards. The cigarette card is included only while the live TV flag is on. */
export function tv2BoardCards<T extends { id: string }>(cards: readonly T[], tvShow: boolean): T[] {
  return cards.filter((card) => card.id !== "CIGARETTES" || tvShow);
}
