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

const originalNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const modifiedNames = ['ALICE', 'bob', 'CHARLIE', 'david', 'EVE'];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log('User Profiles:', userProfiles);

module.exports = createUserProfiles;