import { Update } from "./update";

describe("The Update class", () => {
  describe("isPaused getter", () => {
    it("should return false by default", () => {
      const update = new Update();

      expect(update.isPaused).toBe(false);
    });

    it("should return true after the pause method is called", () => {
      const update = new Update();

      update.pause();

      expect(update.isPaused).toBe(true);
    });

    it("should return false after the resume method is called", () => {
      const update = new Update();

      update.pause();

      update.resume();

      expect(update.isPaused).toBe(false);
    });
  });

  describe("onPaused function", () => {
    it("should call the subscribed callbacks when the game is paused", () => {
      const update = new Update();

      const onPausedCallback = jest.fn();

      update.onPaused(onPausedCallback);

      expect(onPausedCallback).not.toHaveBeenCalled();

      update.pause();

      expect(onPausedCallback).toHaveBeenCalled();
    });

    it("should not call the callbacks after they are unsubscribed", () => {
      const update = new Update();

      const onPausedCallback = jest.fn();

      const off = update.onPaused(onPausedCallback);

      update.pause();

      expect(onPausedCallback).toHaveBeenCalledTimes(1);

      off();

      update.pause();

      expect(onPausedCallback).toHaveBeenCalledTimes(1);
    });

    it('should not call the callbacks if the game was "paused" while already paused', () => {
      const update = new Update();

      update.pause();

      const onPausedCallback = jest.fn();

      update.onPaused(onPausedCallback);

      update.pause();

      expect(onPausedCallback).not.toHaveBeenCalled();
    });
  });

  describe("onResumed function", () => {
    it("should call the subscribed callbacks when the game is resumed", () => {
      const update = new Update();

      update.pause();

      const onResumedCallback = jest.fn();

      update.onResumed(onResumedCallback);

      expect(onResumedCallback).not.toHaveBeenCalled();

      update.resume();

      expect(onResumedCallback).toHaveBeenCalledTimes(1);

      update.pause();

      update.resume();

      expect(onResumedCallback).toHaveBeenCalledTimes(2);
    });

    it("should not call the callbacks after they are unsubscribed", () => {
      const update = new Update();

      update.pause();

      const onResumedCallback = jest.fn();

      const off = update.onResumed(onResumedCallback);

      update.resume();

      expect(onResumedCallback).toHaveBeenCalledTimes(1);

      off();

      update.pause();

      update.resume();

      expect(onResumedCallback).toHaveBeenCalledTimes(1);
    });

    it('should not call the callbacks if the game was "resumed" while already un-paused', () => {
      const update = new Update();

      const onResumedCallback = jest.fn();

      update.onResumed(onResumedCallback);

      update.resume();

      expect(onResumedCallback).not.toHaveBeenCalled();

      update.pause();

      update.resume();

      expect(onResumedCallback).toHaveBeenCalledTimes(1);

      update.resume();

      expect(onResumedCallback).toHaveBeenCalledTimes(1);
    });
  });

  describe("beforeEachUpdate function", () => {
    it("should call the subscribed callbacks before the duringEachUpdate callbacks are called", (done) => {
      const update = new Update();

      const beforeEachUpdateCallback = jest.fn();

      update.beforeEachUpdate(beforeEachUpdateCallback);

      expect(beforeEachUpdateCallback).not.toHaveBeenCalled();

      update.duringEachUpdate(async () => {
        expect(beforeEachUpdateCallback).toHaveBeenCalled();

        done();
      });

      update.update();
    });

    it("should call the subscribed callbacks before the afterEachUpdate callbacks are called", (done) => {
      const update = new Update();

      const beforeEachUpdateCallback = jest.fn();

      update.beforeEachUpdate(beforeEachUpdateCallback);

      expect(beforeEachUpdateCallback).not.toHaveBeenCalled();

      update.afterEachUpdate(async () => {
        expect(beforeEachUpdateCallback).toHaveBeenCalled();

        done();
      });

      update.update();
    });

    it("should not call the callbacks after they are unsubscribed", (done) => {
      const update = new Update();

      const beforeEachUpdateCallback = jest.fn();

      const off = update.beforeEachUpdate(beforeEachUpdateCallback);

      off();

      const afterEachUpdateCallback = async () => {
        expect(beforeEachUpdateCallback).not.toHaveBeenCalled();

        done();
      };

      update.afterEachUpdate(afterEachUpdateCallback);

      expect(beforeEachUpdateCallback).not.toHaveBeenCalled();

      update.update();
    });
  });

  describe("duringEachUpdate function", () => {
    it("should call the subscribed callbacks after the beforeEachUpdate callbacks are called", (done) => {
      const update = new Update();

      const duringEachUpdateCallback = jest.fn();

      update.duringEachUpdate(duringEachUpdateCallback);

      expect(duringEachUpdateCallback).not.toHaveBeenCalled();

      update.beforeEachUpdate(async () => {
        expect(duringEachUpdateCallback).not.toHaveBeenCalled();
      });

      update.afterEachUpdate(async () => {
        expect(duringEachUpdateCallback).toHaveBeenCalled();

        done();
      });

      update.update();
    });

    it("should call the subscribed callbacks before the afterEachUpdate callbacks are called", (done) => {
      const update = new Update();

      const duringEachUpdateCallback = jest.fn();

      update.duringEachUpdate(duringEachUpdateCallback);

      expect(duringEachUpdateCallback).not.toHaveBeenCalled();

      update.afterEachUpdate(async () => {
        expect(duringEachUpdateCallback).toHaveBeenCalled();

        done();
      });

      update.update();
    });

    it("should not call the callbacks after they are unsubscribed", (done) => {
      const update = new Update();

      const duringEachUpdateCallback = jest.fn();

      const off = update.duringEachUpdate(duringEachUpdateCallback);

      off();

      const afterEachUpdateCallback = async () => {
        expect(duringEachUpdateCallback).not.toHaveBeenCalled();

        done();
      };

      update.afterEachUpdate(afterEachUpdateCallback);

      expect(duringEachUpdateCallback).not.toHaveBeenCalled();

      update.update();
    });
  });
});
