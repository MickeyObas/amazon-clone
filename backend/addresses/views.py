from rest_framework.decorators import api_view
from rest_framework.response import Response

import json



@api_view(['POST'])
def add_order_address(request):
    data = json.loads(request.body)

    user = request.user
    street_address = data['streetAddress']
    building_address = data['buildingAddress']
    city = data['city']
    state = data['state']
    zipcode = data['zipCode']
    country = data['country']
    phone = data['phone']
    is_default = data['isDefault']

    return Response({'test': 'haha'})
