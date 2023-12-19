from django.db import models


class Profile(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=255)
    email = models.EmailField()
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    profile_image = models.CharField(max_length=255, default="")
    bio = models.TextField(null=True, blank=True)
    location = models.CharField(max_length=50, null=True, blank=True)
    website = models.URLField(null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    REQUIRED_FIELDS = ['email', 'password']

    def save(self, *args, **kwargs):
        self.check_for_valid_username()
        super(Profile, self).save(*args, **kwargs)

    def check_for_valid_username(self):
        # Add "@" prefix to username if not already present
        if not self.username.startswith("@"):
            self.username = "@" + self.username

    def __str__(self):
        return self.username

    class Meta:
        db_table = 'users'
        verbose_name_plural = 'users'
        verbose_name = 'user'