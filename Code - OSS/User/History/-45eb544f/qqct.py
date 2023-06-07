import cv2

# Replace with your IP camera URL
IP_CAMERA_URL = "http://192.168.88.241:4747/video"

# Open the IP camera stream
cap = cv2.VideoCapture(IP_CAMERA_URL)

# Check if the IP camera stream is open
if not cap.isOpened():
    print("Failed to open IP camera stream")
    exit()

while True:
    # Read a frame from the IP camera stream
    ret, frame = cap.read()

    # Check if the frame was read successfully
    if not ret:
        print("Failed to read frame from IP camera stream")
        break

    # Display the frame
    cv2.imshow("IP Camera Stream", frame)

    # Exit the loop if 'q' key is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the IP camera stream and close all OpenCV windows
cap.release()
cv2.destroyAllWindows()
