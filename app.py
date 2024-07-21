from flask import Flask, jsonify
# import cx_Oracle
import random
import time
import datetime

app = Flask(__name__)

record_log = []
MAX_LOGLEN = 6

def get_record_count():
    # Simular a contagem de registros com um número aleatório
    record_count = random.randint(0, 40)
    timestamp = time.strftime('%Y-%m-%d %H:%M:%S')
   #  timestamp = time.time() 
    objeto = [[
            1990375,
            'CLIENTE',
            '3202',
            '2024-07-19T15:03:41.000Z',
            'N',
            None,
            None,
            'DB1',
            None,
            None
          ],
          [
            1990376,
            'SETOR_COMERCIAL',
            '3202',
            '2024-07-19T15:03:41.000Z',
            'N',
            None,
            None,
            'DB1',
            None,
            None
          ]]
    
    record_log.append({'Time': timestamp, 'count': record_count, 'objeto': objeto})

    if(len(record_log) > MAX_LOGLEN):
        record_log.pop(0)
    return record_count
   #  return random.randint(0, 400)

@app.route('/record', methods=['GET'])
def record_():
   count = get_record_count()
   return jsonify({"log": record_log})


@app.route('/record_last', methods=['GET'])
def record_last():
    
    if(not record_log):
       return jsonify({})
    
    ultimo = record_log[-1]

    return jsonify(ultimo['objeto'])
    
    
   #  if(ultimo['count'] > 100):
   #    return jsonify({
   #        "msg": "preoculpante"
   #    })
   #  return jsonify({
   #      "msg": "normal"
   #  })

@app.route('/record_count', methods=['GET'])
def record_count():
    return jsonify({"log": record_log})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)