import React, { useEffect } from "react";

import { getLessons } from "../store/lessonThunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { User } from "../store/authSlice";
import { Lesson } from "../models/interfaces";
import { LessonsStatus } from "../models/types";

const useLessons = () => {
    const dispatch = useDispatch<AppDispatch>()

    const currentUser = useSelector<RootState>(
        (state) => state.auth.user
    ) as User;

    const lessons = useSelector<RootState>(
        (state) => state.lessons.lessons
    ) as Lesson[];

    useEffect(() => {
        const fetchLessons = async () => {
            if (currentUser.id) {
                dispatch(getLessons(currentUser.id));
            }
        };

        fetchLessons();
    }, [currentUser?.id, dispatch]);

    const pastLessons = lessons.filter((lesson) => lesson.status === LessonsStatus.PAST)
    const bookedLessons = lessons.filter((lessons) => lessons.status === LessonsStatus.BOOKED)
    const availableLessons = lessons.filter((lessons) => lessons.status === LessonsStatus.AVAILABLE)

    return [pastLessons, bookedLessons, availableLessons]
};

export default useLessons;
