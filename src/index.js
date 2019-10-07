/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const _totalCourseHours = 800;
      const _basicCourseHours = 500;
      let focusedHours = config[ focus ];
      let needWeeks = 0;

      if( knowsProgramming ) {
        needWeeks = _totalCourseHours / ( +focusedHours );
      } else {
        needWeeks = ( _totalCourseHours + _basicCourseHours ) / ( +focusedHours )
      }

      needWeeks = Math.ceil( needWeeks ); 
        return needWeeks;

    };
  