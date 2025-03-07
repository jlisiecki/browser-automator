export default async function promiseOne<T>(
  promises: { promise: Promise<T>; id: string }[],
) {
  return new Promise<string>((resolve, reject) => {
    let rejected = 0;
    let resolved = false;
    const total = promises.length;

    promises.forEach(({ promise, id }) => {
      promise
        .then(() => {
          if (!resolved) {
            resolved = true;
            resolve(id);
          }
        })
        .catch(() => {
          rejected++;
          if (rejected === total) {
            reject(new Error("All promises rejected"));
          }
        });
    });
  });
}
