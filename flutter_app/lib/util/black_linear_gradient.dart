// 黑色线性渐变
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

blackLinearGradient({bool fromTop = false}) {
  return LinearGradient(
    begin: fromTop ? Alignment.topCenter : Alignment.bottomCenter,
    end: !fromTop ? Alignment.topCenter : Alignment.bottomCenter,
    colors: [
      Colors.black54,
      Colors.black45,
      Colors.black38,
      Colors.black26,
      Colors.black12,
      Colors.transparent,
    ],
  );
}
