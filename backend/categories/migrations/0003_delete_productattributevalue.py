# Generated by Django 5.1.2 on 2024-11-21 02:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("categories", "0002_alter_category_options_categoryattribute_and_more"),
    ]

    operations = [
        migrations.DeleteModel(
            name="ProductAttributeValue",
        ),
    ]
