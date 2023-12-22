from django.db import models
from django.contrib.auth.models import AbstractUser



class CustomUser(AbstractUser):
    themes_count = models.IntegerField(blank=True, null=True)
    messages_count = models.IntegerField(blank=True, null=True)




class Theme(models.Model):
    title = models.CharField(max_length=100)
    theme_owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    create_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.title}'


    class Meta:
        verbose_name = 'Theme'
        verbose_name_plural = 'Themes'





class ThemeMessage(models.Model):
    text = models.TextField(max_length=5000)
    send_date = models.DateField(auto_now_add=True)
    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    theme = models.ForeignKey(Theme, on_delete=models.CASCADE)


    def __str__(self):
        return f'Theme message'


    class Meta:
        verbose_name = 'Message'
        verbose_name_plural = 'Messages'