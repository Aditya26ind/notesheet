# Generated by Django 3.2.4 on 2021-06-19 16:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0004_auto_20210618_1519'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='notes_by_user',
            name='notesuser',
        ),
    ]