from rest_framework import permissions


class IsOwnerOrReadonly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.user == request.user


class IsAdminOrReadonly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return bool(request.user and request.user.is_staff)


class AllowAnyOrReadonly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method == 'GET':
            return True

        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class IsAuthenticatedOrReadOnlyForCreate(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user.is_authenticated


class IsAdminOrReaonlyForCreate(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        return bool(request.user and request.user.is_staff)