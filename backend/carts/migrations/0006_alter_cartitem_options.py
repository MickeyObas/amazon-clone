# Generated by Django 5.1.2 on 2024-12-06 14:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("carts", "0005_cartitem_created"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="cartitem",
            options={"ordering": ["-created"]},
        ),
    ]
