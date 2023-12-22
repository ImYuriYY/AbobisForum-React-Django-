
from django.contrib import admin
from django.urls import path, include
from abapp.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/themeslist', ThemesAPIView.as_view()),
    path('api/userslist', UsersAPIView.as_view()),
    path('api/messageslist', ThemeMessagesAPIView.as_view()),
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/', UserView.as_view()),
    path('logout/', LogoutView.as_view())
]
