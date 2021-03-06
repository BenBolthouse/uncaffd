'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'BusinessTags',
      [
        { businessId: 1, tagId: 8 },
        { businessId: 1, tagId: 25 },
        { businessId: 2, tagId: 13 },
        { businessId: 2, tagId: 17 },
        { businessId: 2, tagId: 18 },
        { businessId: 2, tagId: 27 },
        { businessId: 3, tagId: 7 },
        { businessId: 3, tagId: 18 },
        { businessId: 3, tagId: 22 },
        { businessId: 3, tagId: 27 },
        { businessId: 3, tagId: 28 },
        { businessId: 4, tagId: 28 },
        { businessId: 5, tagId: 5 },
        { businessId: 5, tagId: 7 },
        { businessId: 5, tagId: 8 },
        { businessId: 5, tagId: 11 },
        { businessId: 5, tagId: 16 },
        { businessId: 5, tagId: 16 },
        { businessId: 5, tagId: 18 },
        { businessId: 5, tagId: 21 },
        { businessId: 5, tagId: 25 },
        { businessId: 5, tagId: 25 },
        { businessId: 6, tagId: 18 },
        { businessId: 6, tagId: 20 },
        { businessId: 7, tagId: 10 },
        { businessId: 7, tagId: 16 },
        { businessId: 7, tagId: 20 },
        { businessId: 8, tagId: 1 },
        { businessId: 8, tagId: 6 },
        { businessId: 8, tagId: 18 },
        { businessId: 8, tagId: 22 },
        { businessId: 9, tagId: 5 },
        { businessId: 9, tagId: 6 },
        { businessId: 9, tagId: 8 },
        { businessId: 9, tagId: 28 },
        { businessId: 9, tagId: 29 },
        { businessId: 10, tagId: 2 },
        { businessId: 10, tagId: 2 },
        { businessId: 10, tagId: 10 },
        { businessId: 10, tagId: 16 },
        { businessId: 10, tagId: 16 },
        { businessId: 10, tagId: 17 },
        { businessId: 10, tagId: 18 },
        { businessId: 10, tagId: 21 },
        { businessId: 10, tagId: 24 },
        { businessId: 10, tagId: 29 },
        { businessId: 11, tagId: 2 },
        { businessId: 11, tagId: 7 },
        { businessId: 11, tagId: 8 },
        { businessId: 11, tagId: 20 },
        { businessId: 11, tagId: 24 },
        { businessId: 12, tagId: 17 },
        { businessId: 12, tagId: 19 },
        { businessId: 12, tagId: 26 },
        { businessId: 13, tagId: 9 },
        { businessId: 13, tagId: 17 },
        { businessId: 13, tagId: 24 },
        { businessId: 13, tagId: 25 },
        { businessId: 13, tagId: 28 },
        { businessId: 14, tagId: 9 },
        { businessId: 14, tagId: 13 },
        { businessId: 14, tagId: 21 },
        { businessId: 15, tagId: 5 },
        { businessId: 15, tagId: 8 },
        { businessId: 15, tagId: 15 },
        { businessId: 15, tagId: 16 },
        { businessId: 15, tagId: 23 },
        { businessId: 15, tagId: 25 },
        { businessId: 17, tagId: 3 },
        { businessId: 17, tagId: 3 },
        { businessId: 17, tagId: 4 },
        { businessId: 17, tagId: 4 },
        { businessId: 17, tagId: 6 },
        { businessId: 17, tagId: 11 },
        { businessId: 17, tagId: 13 },
        { businessId: 17, tagId: 14 },
        { businessId: 17, tagId: 21 },
        { businessId: 18, tagId: 19 },
        { businessId: 18, tagId: 19 },
        { businessId: 18, tagId: 25 },
        { businessId: 19, tagId: 6 },
        { businessId: 20, tagId: 4 },
        { businessId: 20, tagId: 5 },
        { businessId: 20, tagId: 10 },
        { businessId: 20, tagId: 13 },
        { businessId: 20, tagId: 26 },
        { businessId: 21, tagId: 3 },
        { businessId: 21, tagId: 8 },
        { businessId: 21, tagId: 9 },
        { businessId: 21, tagId: 17 },
        { businessId: 21, tagId: 19 },
        { businessId: 21, tagId: 23 },
        { businessId: 21, tagId: 26 },
        { businessId: 22, tagId: 10 },
        { businessId: 22, tagId: 27 },
        { businessId: 23, tagId: 13 },
        { businessId: 23, tagId: 18 },
        { businessId: 23, tagId: 21 },
        { businessId: 23, tagId: 26 },
        { businessId: 24, tagId: 5 },
        { businessId: 24, tagId: 8 },
        { businessId: 24, tagId: 9 },
        { businessId: 25, tagId: 4 },
        { businessId: 25, tagId: 10 },
        { businessId: 26, tagId: 24 },
        { businessId: 27, tagId: 7 },
        { businessId: 27, tagId: 9 },
        { businessId: 27, tagId: 10 },
        { businessId: 27, tagId: 11 },
        { businessId: 27, tagId: 13 },
        { businessId: 27, tagId: 16 },
        { businessId: 27, tagId: 17 },
        { businessId: 27, tagId: 25 },
        { businessId: 27, tagId: 27 },
        { businessId: 28, tagId: 2 },
        { businessId: 28, tagId: 5 },
        { businessId: 28, tagId: 6 },
        { businessId: 28, tagId: 9 },
        { businessId: 28, tagId: 16 },
        { businessId: 28, tagId: 21 },
        { businessId: 28, tagId: 22 },
        { businessId: 28, tagId: 28 },
        { businessId: 29, tagId: 10 },
        { businessId: 29, tagId: 11 },
        { businessId: 30, tagId: 9 },
        { businessId: 31, tagId: 2 },
        { businessId: 31, tagId: 9 },
        { businessId: 31, tagId: 20 },
        { businessId: 31, tagId: 27 },
        { businessId: 32, tagId: 4 },
        { businessId: 32, tagId: 10 },
        { businessId: 32, tagId: 13 },
        { businessId: 32, tagId: 15 },
        { businessId: 32, tagId: 17 },
        { businessId: 33, tagId: 6 },
        { businessId: 33, tagId: 7 },
        { businessId: 33, tagId: 25 },
        { businessId: 34, tagId: 4 },
        { businessId: 34, tagId: 5 },
        { businessId: 34, tagId: 18 },
        { businessId: 34, tagId: 25 },
        { businessId: 35, tagId: 8 },
        { businessId: 36, tagId: 18 },
        { businessId: 36, tagId: 25 },
        { businessId: 36, tagId: 27 },
        { businessId: 37, tagId: 7 },
        { businessId: 37, tagId: 14 },
        { businessId: 37, tagId: 25 },
        { businessId: 37, tagId: 26 },
        { businessId: 38, tagId: 4 },
        { businessId: 38, tagId: 7 },
        { businessId: 38, tagId: 13 },
        { businessId: 38, tagId: 14 },
        { businessId: 38, tagId: 16 },
        { businessId: 38, tagId: 17 },
        { businessId: 38, tagId: 24 },
        { businessId: 38, tagId: 24 },
        { businessId: 39, tagId: 3 },
        { businessId: 39, tagId: 11 },
        { businessId: 39, tagId: 16 },
        { businessId: 39, tagId: 20 },
        { businessId: 40, tagId: 4 },
        { businessId: 40, tagId: 13 },
        { businessId: 40, tagId: 26 },
        { businessId: 40, tagId: 27 },
        { businessId: 41, tagId: 18 },
        { businessId: 41, tagId: 23 },
        { businessId: 42, tagId: 3 },
        { businessId: 42, tagId: 27 },
        { businessId: 43, tagId: 3 },
        { businessId: 43, tagId: 10 },
        { businessId: 44, tagId: 4 },
        { businessId: 44, tagId: 7 },
        { businessId: 44, tagId: 13 },
        { businessId: 44, tagId: 14 },
        { businessId: 44, tagId: 16 },
        { businessId: 44, tagId: 21 },
        { businessId: 44, tagId: 27 },
        { businessId: 46, tagId: 3 },
        { businessId: 46, tagId: 7 },
        { businessId: 46, tagId: 15 },
        { businessId: 46, tagId: 20 },
        { businessId: 46, tagId: 24 },
        { businessId: 46, tagId: 28 },
        { businessId: 47, tagId: 8 },
        { businessId: 47, tagId: 9 },
        { businessId: 47, tagId: 10 },
        { businessId: 47, tagId: 28 },
        { businessId: 47, tagId: 28 },
        { businessId: 48, tagId: 4 },
        { businessId: 48, tagId: 14 },
        { businessId: 48, tagId: 22 },
        { businessId: 48, tagId: 29 },
        { businessId: 49, tagId: 5 },
        { businessId: 49, tagId: 5 },
        { businessId: 49, tagId: 8 },
        { businessId: 49, tagId: 12 },
        { businessId: 49, tagId: 13 },
        { businessId: 49, tagId: 13 },
        { businessId: 49, tagId: 14 },
        { businessId: 49, tagId: 20 },
        { businessId: 49, tagId: 28 },
        { businessId: 50, tagId: 1 },
        { businessId: 50, tagId: 3 },
        { businessId: 50, tagId: 4 },
        { businessId: 50, tagId: 6 },
        { businessId: 50, tagId: 11 },
        { businessId: 50, tagId: 11 },
        { businessId: 50, tagId: 17 },
        { businessId: 51, tagId: 3 },
        { businessId: 51, tagId: 3 },
        { businessId: 51, tagId: 5 },
        { businessId: 51, tagId: 9 },
        { businessId: 51, tagId: 16 },
        { businessId: 51, tagId: 19 },
        { businessId: 51, tagId: 20 },
        { businessId: 51, tagId: 21 },
        { businessId: 51, tagId: 24 },
        { businessId: 51, tagId: 26 },
        { businessId: 52, tagId: 6 },
        { businessId: 52, tagId: 16 },
        { businessId: 53, tagId: 8 },
        { businessId: 53, tagId: 11 },
        { businessId: 53, tagId: 23 },
        { businessId: 54, tagId: 2 },
        { businessId: 54, tagId: 23 },
        { businessId: 54, tagId: 23 },
        { businessId: 55, tagId: 10 },
        { businessId: 55, tagId: 17 },
        { businessId: 55, tagId: 23 },
        { businessId: 55, tagId: 28 },
        { businessId: 56, tagId: 12 },
        { businessId: 56, tagId: 27 },
        { businessId: 57, tagId: 5 },
        { businessId: 57, tagId: 10 },
        { businessId: 57, tagId: 18 },
        { businessId: 57, tagId: 25 },
        { businessId: 59, tagId: 12 },
        { businessId: 59, tagId: 14 },
        { businessId: 59, tagId: 27 },
        { businessId: 60, tagId: 4 },
        { businessId: 60, tagId: 19 },
        { businessId: 60, tagId: 25 },
        { businessId: 60, tagId: 25 },
        { businessId: 60, tagId: 25 },
        { businessId: 61, tagId: 8 },
        { businessId: 61, tagId: 9 },
        { businessId: 61, tagId: 12 },
        { businessId: 61, tagId: 16 },
        { businessId: 61, tagId: 22 },
        { businessId: 61, tagId: 25 },
        { businessId: 61, tagId: 25 },
        { businessId: 61, tagId: 28 },
        { businessId: 62, tagId: 13 },
        { businessId: 62, tagId: 23 },
        { businessId: 62, tagId: 25 },
        { businessId: 63, tagId: 1 },
        { businessId: 63, tagId: 3 },
        { businessId: 63, tagId: 4 },
        { businessId: 63, tagId: 18 },
        { businessId: 63, tagId: 24 },
        { businessId: 64, tagId: 7 },
        { businessId: 64, tagId: 8 },
        { businessId: 65, tagId: 8 },
        { businessId: 65, tagId: 21 },
        { businessId: 66, tagId: 11 },
        { businessId: 66, tagId: 24 },
        { businessId: 67, tagId: 1 },
        { businessId: 67, tagId: 3 },
        { businessId: 67, tagId: 29 },
        { businessId: 68, tagId: 10 },
        { businessId: 68, tagId: 11 },
        { businessId: 68, tagId: 21 },
        { businessId: 68, tagId: 24 },
        { businessId: 69, tagId: 5 },
        { businessId: 69, tagId: 9 },
        { businessId: 69, tagId: 14 },
        { businessId: 69, tagId: 23 },
        { businessId: 69, tagId: 23 },
        { businessId: 70, tagId: 3 },
        { businessId: 70, tagId: 7 },
        { businessId: 70, tagId: 12 },
        { businessId: 70, tagId: 16 },
        { businessId: 71, tagId: 1 },
        { businessId: 71, tagId: 8 },
        { businessId: 71, tagId: 25 },
        { businessId: 72, tagId: 6 },
        { businessId: 72, tagId: 9 },
        { businessId: 72, tagId: 12 },
        { businessId: 72, tagId: 14 },
        { businessId: 72, tagId: 18 },
        { businessId: 72, tagId: 25 },
        { businessId: 72, tagId: 28 },
        { businessId: 72, tagId: 29 },
        { businessId: 73, tagId: 1 },
        { businessId: 73, tagId: 2 },
        { businessId: 73, tagId: 9 },
        { businessId: 73, tagId: 13 },
        { businessId: 73, tagId: 25 },
        { businessId: 74, tagId: 1 },
        { businessId: 74, tagId: 9 },
        { businessId: 74, tagId: 28 },
        { businessId: 75, tagId: 2 },
        { businessId: 75, tagId: 9 },
        { businessId: 75, tagId: 16 },
        { businessId: 75, tagId: 20 },
        { businessId: 76, tagId: 1 },
        { businessId: 76, tagId: 2 },
        { businessId: 76, tagId: 3 },
        { businessId: 76, tagId: 6 },
        { businessId: 76, tagId: 12 },
        { businessId: 76, tagId: 17 },
        { businessId: 76, tagId: 17 },
        { businessId: 76, tagId: 19 },
        { businessId: 76, tagId: 29 },
        { businessId: 77, tagId: 1 },
        { businessId: 77, tagId: 11 },
        { businessId: 77, tagId: 14 },
        { businessId: 77, tagId: 29 },
        { businessId: 78, tagId: 5 },
        { businessId: 78, tagId: 7 },
        { businessId: 78, tagId: 8 },
        { businessId: 78, tagId: 10 },
        { businessId: 78, tagId: 13 },
        { businessId: 78, tagId: 27 },
        { businessId: 79, tagId: 5 },
        { businessId: 79, tagId: 5 },
        { businessId: 79, tagId: 10 },
        { businessId: 79, tagId: 25 },
        { businessId: 80, tagId: 13 },
        { businessId: 81, tagId: 1 },
        { businessId: 81, tagId: 8 },
        { businessId: 81, tagId: 10 },
        { businessId: 82, tagId: 2 },
        { businessId: 82, tagId: 9 },
        { businessId: 82, tagId: 10 },
        { businessId: 82, tagId: 19 },
        { businessId: 82, tagId: 27 },
        { businessId: 82, tagId: 28 },
        { businessId: 83, tagId: 1 },
        { businessId: 83, tagId: 3 },
        { businessId: 83, tagId: 15 },
        { businessId: 83, tagId: 23 },
        { businessId: 83, tagId: 24 },
        { businessId: 83, tagId: 27 },
        { businessId: 84, tagId: 2 },
        { businessId: 84, tagId: 13 },
        { businessId: 84, tagId: 17 },
        { businessId: 85, tagId: 2 },
        { businessId: 85, tagId: 6 },
        { businessId: 85, tagId: 16 },
        { businessId: 85, tagId: 19 },
        { businessId: 86, tagId: 9 },
        { businessId: 86, tagId: 21 },
        { businessId: 86, tagId: 23 },
        { businessId: 86, tagId: 29 },
        { businessId: 87, tagId: 12 },
        { businessId: 88, tagId: 3 },
        { businessId: 88, tagId: 4 },
        { businessId: 88, tagId: 6 },
        { businessId: 88, tagId: 7 },
        { businessId: 88, tagId: 7 },
        { businessId: 88, tagId: 10 },
        { businessId: 88, tagId: 13 },
        { businessId: 89, tagId: 4 },
        { businessId: 89, tagId: 7 },
        { businessId: 89, tagId: 24 },
        { businessId: 89, tagId: 29 },
        { businessId: 90, tagId: 8 },
        { businessId: 90, tagId: 10 },
        { businessId: 90, tagId: 13 },
        { businessId: 90, tagId: 17 },
        { businessId: 90, tagId: 23 },
        { businessId: 90, tagId: 24 },
        { businessId: 91, tagId: 5 },
        { businessId: 91, tagId: 9 },
        { businessId: 91, tagId: 11 },
        { businessId: 91, tagId: 25 },
        { businessId: 92, tagId: 26 },
        { businessId: 92, tagId: 27 },
        { businessId: 93, tagId: 2 },
        { businessId: 93, tagId: 3 },
        { businessId: 93, tagId: 3 },
        { businessId: 93, tagId: 8 },
        { businessId: 93, tagId: 13 },
        { businessId: 93, tagId: 16 },
        { businessId: 93, tagId: 18 },
        { businessId: 93, tagId: 25 },
        { businessId: 93, tagId: 27 },
        { businessId: 94, tagId: 5 },
        { businessId: 94, tagId: 8 },
        { businessId: 94, tagId: 11 },
        { businessId: 94, tagId: 15 },
        { businessId: 94, tagId: 20 },
        { businessId: 95, tagId: 5 },
        { businessId: 95, tagId: 6 },
        { businessId: 95, tagId: 12 },
        { businessId: 95, tagId: 13 },
        { businessId: 95, tagId: 21 },
        { businessId: 95, tagId: 23 },
        { businessId: 96, tagId: 14 },
        { businessId: 96, tagId: 19 },
        { businessId: 97, tagId: 6 },
        { businessId: 97, tagId: 18 },
        { businessId: 98, tagId: 5 },
        { businessId: 98, tagId: 15 },
        { businessId: 98, tagId: 28 },
        { businessId: 98, tagId: 28 },
        { businessId: 99, tagId: 18 },
        { businessId: 100, tagId: 5 },
        { businessId: 100, tagId: 5 },
        { businessId: 100, tagId: 15 },
        { businessId: 100, tagId: 16 },
        { businessId: 100, tagId: 18 },
        { businessId: 100, tagId: 27 },
        { businessId: 100, tagId: 29 },
        { businessId: 101, tagId: 18 },
        { businessId: 101, tagId: 29 },
        { businessId: 102, tagId: 2 },
        { businessId: 102, tagId: 2 },
        { businessId: 102, tagId: 4 },
        { businessId: 102, tagId: 8 },
        { businessId: 102, tagId: 9 },
        { businessId: 103, tagId: 3 },
        { businessId: 103, tagId: 14 },
        { businessId: 103, tagId: 22 },
        { businessId: 103, tagId: 22 },
        { businessId: 103, tagId: 29 },
        { businessId: 104, tagId: 3 },
        { businessId: 104, tagId: 12 },
        { businessId: 104, tagId: 17 },
        { businessId: 104, tagId: 18 },
        { businessId: 104, tagId: 22 },
        { businessId: 104, tagId: 25 },
        { businessId: 104, tagId: 26 },
        { businessId: 105, tagId: 10 },
        { businessId: 106, tagId: 6 },
        { businessId: 106, tagId: 24 },
        { businessId: 106, tagId: 28 },
        { businessId: 106, tagId: 28 },
        { businessId: 107, tagId: 5 },
        { businessId: 107, tagId: 23 },
        { businessId: 107, tagId: 26 },
        { businessId: 108, tagId: 9 },
        { businessId: 108, tagId: 10 },
        { businessId: 108, tagId: 10 },
        { businessId: 108, tagId: 10 },
        { businessId: 108, tagId: 13 },
        { businessId: 108, tagId: 21 },
        { businessId: 108, tagId: 24 },
        { businessId: 108, tagId: 28 },
        { businessId: 109, tagId: 3 },
        { businessId: 109, tagId: 13 },
        { businessId: 110, tagId: 1 },
        { businessId: 110, tagId: 1 },
        { businessId: 110, tagId: 4 },
        { businessId: 110, tagId: 7 },
        { businessId: 110, tagId: 12 },
        { businessId: 110, tagId: 13 },
        { businessId: 110, tagId: 13 },
        { businessId: 110, tagId: 20 },
        { businessId: 110, tagId: 21 },
        { businessId: 110, tagId: 21 },
        { businessId: 110, tagId: 23 },
        { businessId: 111, tagId: 17 },
        { businessId: 112, tagId: 2 },
        { businessId: 112, tagId: 3 },
        { businessId: 112, tagId: 23 },
        { businessId: 112, tagId: 29 },
        { businessId: 113, tagId: 17 },
        { businessId: 113, tagId: 24 },
        { businessId: 114, tagId: 1 },
        { businessId: 114, tagId: 17 },
        { businessId: 115, tagId: 7 },
        { businessId: 115, tagId: 17 },
        { businessId: 116, tagId: 3 },
        { businessId: 116, tagId: 5 },
        { businessId: 116, tagId: 9 },
        { businessId: 116, tagId: 16 },
        { businessId: 116, tagId: 19 },
        { businessId: 118, tagId: 1 },
        { businessId: 118, tagId: 27 },
        { businessId: 118, tagId: 29 },
        { businessId: 119, tagId: 12 },
        { businessId: 119, tagId: 13 },
        { businessId: 119, tagId: 16 },
        { businessId: 119, tagId: 16 },
        { businessId: 120, tagId: 4 },
        { businessId: 120, tagId: 14 },
        { businessId: 120, tagId: 16 },
        { businessId: 120, tagId: 27 },
        { businessId: 121, tagId: 5 },
        { businessId: 121, tagId: 16 },
        { businessId: 121, tagId: 18 },
        { businessId: 121, tagId: 21 },
        { businessId: 121, tagId: 22 },
        { businessId: 121, tagId: 27 },
        { businessId: 122, tagId: 22 },
        { businessId: 123, tagId: 7 },
        { businessId: 124, tagId: 1 },
        { businessId: 124, tagId: 2 },
        { businessId: 124, tagId: 3 },
        { businessId: 124, tagId: 21 },
        { businessId: 125, tagId: 1 },
        { businessId: 125, tagId: 28 },
        { businessId: 126, tagId: 7 },
        { businessId: 126, tagId: 17 },
        { businessId: 126, tagId: 23 },
        { businessId: 126, tagId: 27 },
        { businessId: 127, tagId: 9 },
        { businessId: 128, tagId: 4 },
        { businessId: 128, tagId: 16 },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BusinessTags', null, {});
  },
};
