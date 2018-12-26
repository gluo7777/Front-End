# Input Rules
- in is #
    - stack empty
        - push in
    - stack size > 0
        - top is #
            - append to top
        - top is OPS
            - push in
- in is `.` or `-`
    - stack empty
        - push in
    - stack size > 0
        - top is #
            - in is `.`
                - `.` not in top
                    - append to in
                - `.` in top
                    - error
            - in is `-`
                error
        - top is OPS
            - push in
        - top is `.` or `-`
            - error
- in is OPS
    - stack empty
        - error
    - stack size > 0
        - top is OPS
            - error
        - top is `.` or `-`
            - error
        - top is #
            - push in

## Streamlined Input Rules

## Notes
- `-` is ambiguous: should use name instead to distinguish between division and negative sign.

## Rewritten Rules
- stack empty
    - in is OPS
        - error
    - push in
- stack size > 0, in is
    - #
        - top is #, `.`, `-`
            - append to top
        - top is OPS
            - push in
    - `.`
        - top contains `.`
            - error
        - else
            push in
    - `-`
        - top is OPS
            - push in
        - else
            - error
    - OPS
        - top is #
            - push in
        - else
            - error