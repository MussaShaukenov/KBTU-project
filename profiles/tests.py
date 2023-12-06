from django.test import TestCase
from profiles.models import Profile


class ProfileTestCase(TestCase):
    def testProfile(self):
        profile = Profile.objects.create(
            username="testuser",
            email="test@gmail.com",
            password="testpassword",
            first_name="testfirst",
            last_name="testlast",
            bio="testbio",
            location="testlocation",
            birth_date="2021-01-01",
            profile_image="testimage",
            website="testwebsite",
            )
        self.assertEqual(Profile.objects.count(), 1)
        self.assertEqual(profile.username, "@testuser")
        self.assertEqual(profile.email, "test@gmail.com")
        self.assertEqual(profile.password, "testpassword")
        self.assertEqual(profile.first_name, "testfirst")
        self.assertEqual(profile.last_name, "testlast")
        self.assertEqual(profile.bio, "testbio")
        self.assertEqual(profile.location, "testlocation")
        self.assertEqual(profile.birth_date, "2021-01-01")
        self.assertEqual(profile.profile_image, "testimage")
        self.assertEqual(profile.website, "testwebsite")