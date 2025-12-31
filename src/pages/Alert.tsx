import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Alert() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.showModal();
    }

    // Play continuous alert sound
    try {
      const audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      audioContextRef.current = audioContext;

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Configure alert sound: attention-grabbing tone
      oscillator.frequency.value = 800;
      oscillator.type = "sine";

      // Set volume
      gainNode.gain.value = 0.2;

      oscillator.start();
      oscillatorRef.current = oscillator;
    } catch (error) {
      console.warn("Could not play alert sound:", error);
    }

    // Cleanup function
    return () => {
      stopSound();
    };
  }, []);

  function stopSound() {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current = null;
      } catch (e) {
        // Ignore errors when stopping
      }
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {
        // Ignore errors when closing
      });
      audioContextRef.current = null;
    }
  }

  function handleClose() {
    // Stop the alert sound
    stopSound();

    const dialog = dialogRef.current;
    if (dialog) {
      dialog.close();
      navigate("/");
    }
  }

  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    const dialog = dialogRef.current;
    if (dialog && e.target === dialog) {
      handleClose();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="alert-modal"
      onClick={handleBackdropClick}
      onClose={handleClose}
    >
      <div className="alert-modal-content">
        <h1>נא לנטול את התרופות הבאות:</h1>
        <ul>
          <li>פרדניזון 5mg (כדור 1)</li>
          <li>ולסרטן 80mg (כדור 1)</li>
        </ul>
        <button
          type="button"
          className="alert-confirm-button"
          onClick={handleClose}
        >
          נטלתי
        </button>
      </div>
    </dialog>
  );
}
export default Alert;
