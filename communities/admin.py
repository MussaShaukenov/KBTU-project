from django.contrib import admin
from .models import Community, CommunityCategory

# Register your models here.
admin.site.register(Community)
admin.site.register(CommunityCategory)