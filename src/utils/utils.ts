// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function memoize<Fn extends (...args: any[]) => any>(fn: Fn): (name: string) => ReturnType<Fn> {
  const cache: { [key: string]: ReturnType<Fn> } = {};

  return (name: string): ReturnType<Fn> => {
    if (!(name in cache)) {
      cache[name] = fn(name);
    }

    return cache[name];
  };
}
