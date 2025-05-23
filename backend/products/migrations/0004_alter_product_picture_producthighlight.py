# Generated by Django 5.1.2 on 2024-11-20 14:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0003_product_avg_rating_product_rating_count"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="picture",
            field=models.ImageField(upload_to="product_images"),
        ),
        migrations.CreateModel(
            name="ProductHighlight",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(blank=True, max_length=255, null=True)),
                ("description", models.TextField()),
                ("order", models.PositiveIntegerField(default=0)),
                (
                    "product",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="highlights",
                        to="products.product",
                    ),
                ),
            ],
            options={
                "ordering": ["order"],
            },
        ),
    ]
