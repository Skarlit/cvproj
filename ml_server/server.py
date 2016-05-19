from flask import Flask
import argparse

s = Flask(__name__)

@s.route("/get_char/<int:char_id>")
def get_char(char_id):
    return "get char id of %d" % char_id

def _print_config(args_dict):
    print "Starting ML server with following configs:"
    for arg in args_dict:
        print '- {0}: {1}'.format(arg, args_dict[arg])
    print "_" * 40
    print ""

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--debug', action='store_true')
    args = parser.parse_args()
    _print_config(args.__dict__)

    s.run(debug=args.debug)
