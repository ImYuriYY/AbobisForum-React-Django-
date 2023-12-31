from rest_framework import generics
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
import jwt, datetime
from .models import *
from .serializers import *

class RegisterView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    

class LoginView(APIView):
    def post(self, request):
        username = request.data['username']
        password = request.data['password']

        user = CustomUser.objects.filter(username=username).first()

        if user is None:
            raise AuthenticationFailed('User not found!')
        
        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')
        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }

        return response
    

class UserView(APIView):
    def get(self,request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed("Unautothenticated")
        
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unautothenticated")
        
        user = CustomUser.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)

        return Response(serializer.data)
    

class LogoutView(APIView):
    def post(self, request):
        response = Response()

        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response



        

class ThemesAPIView(generics.ListAPIView):
    queryset = Theme.objects.all()
    serializer_class = ThemeSerializer

class UsersAPIView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

class ThemeMessagesAPIView(generics.ListAPIView):
    queryset = ThemeMessage.objects.all()
    serializer_class = ThemeMessageSerializer














# @api_view()
# @permission_classes([AllowAny])
# def user(request: Request):
#     return Response( {
#         'data': UserSerializer(request.user).data
#     } )








# @api_view(["POST"
# ])
# @permission_classes([AllowAny])
# def adduser(request):
#     print(request.data)
#     serializer = serializers.RegistrationSerializer(data=request.data)
#     if not serializer.is_valid():
#         return Response({
#             "error": {
#                 "code": 422,
#                 "message": "Нарушение правил валидации",
#                 "errors":
#                     serializer.errors
#             }
#         }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
#     user = serializer.save()
#     token, created = Token.objects.get_or_create(user=user)
#     return Response({
#         "data": {
#             "user_token": token.key
#         }
#     }, status=status.HTTP_201_CREATED)
    


