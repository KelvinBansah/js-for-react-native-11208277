// userInfo.js

/**
 * Function to create user profiles.
 * Takes an array of original names and an array of modified names,
 * returns an array of objects with originalName, modifiedName, and id.
 * 
 * @param {string[]} names - The array of original names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @returns {Object[]} An array of user profiles.
 */
function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error('The length of names and modifiedNames arrays must match.');
    }

    const userProfiles = names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });

    return userProfiles;
}

// Example usage
const originalNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const modifiedNames = ['ALICE', 'bob', 'CHARLIE', 'david', 'EVE'];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log('User Profiles:', userProfiles);

module.exports = createUserProfiles;