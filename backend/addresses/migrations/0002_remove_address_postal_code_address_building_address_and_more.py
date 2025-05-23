# Generated by Django 5.1.2 on 2024-12-10 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("addresses", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="address",
            name="postal_code",
        ),
        migrations.AddField(
            model_name="address",
            name="building_address",
            field=models.CharField(default="", max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="address",
            name="zip_code",
            field=models.CharField(default="", max_length=12),
            preserve_default=False,
        ),
    ]
