# Seneca Mesh simple example
Uses [fuge](http://fuge.io/) for process management.

### Get started
In one terminal (Fuge).

 ```bash
# requires fuge
npm install -g fuge

# install dependencies
npm install

# start the fuge shell
npm start 
# or
fuge shell fuge/fuge.yml

# start the Base node
fuge> ps
name                          type           status         watch          tail
base                          node           stopped        no             yes
service                       node           stopped        no             yes
service-v2                    node           stopped        no             yes

fuge> start base
```

### Start the client node
In a seperate terminal (client).
```base
node client.js
# note: the errors constantaly appearing
```

### Start the service node using Fuge
In the Fuge terminal.
```base
fuge> start service
# note: the client terminal now shows only 'red' random color.  Not a very good random color service.
```

###  Deploy a new service node using Fuge
In the Fuge terminal.
```base
fuge> start service-v2
# note: the client terminal now shows some 'red' and some random.  That's a little better.
```

### Stop the old service node using Fuge
In the Fuge terminal.
```base
fuge> stop service
# note: the client terminal now shows random colors.  Success!
```

### Exit fuge
In the Fuge terminal.
```base
fuge> stop all
fuge> exit
```