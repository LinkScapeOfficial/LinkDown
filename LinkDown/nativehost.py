import json
import subprocess
import sys

# Read a message from stdin and decode it
def read_message():
    raw_length = sys.stdin.buffer.read(4)
    if not raw_length:
        sys.exit(0)
    message_length = int.from_bytes(raw_length, byteorder='little')
    message = sys.stdin.buffer.read(message_length).decode('utf-8')
    return json.loads(message)

# Encode a message and send it to stdout
def send_message(message):
    encoded_message = json.dumps(message).encode('utf-8')
    encoded_length = len(encoded_message).to_bytes(4, byteorder='little')
    sys.stdout.buffer.write(encoded_length)
    sys.stdout.buffer.write(encoded_message)
    sys.stdout.buffer.flush()

# Main loop
while True:
    # Read a message from stdin
    message = read_message()

    # Check if the message contains a command
    if 'command' not in message:
        send_message({'error': 'No command specified'})
        continue

    # Execute the command using subprocess
    try:
        output = subprocess.check_output(message['command'], shell=True, stderr=subprocess.STDOUT)
        send_message({'output': output.decode('utf-8')})
    except subprocess.CalledProcessError as e:
        send_message({'error': e.output.decode('utf-8')})
