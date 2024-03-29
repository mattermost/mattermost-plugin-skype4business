import {getConfig} from 'mattermost-redux/selectors/entities/general';

import {id as pluginId} from '../manifest';

const getPluginState = (state) => state[`plugins-${pluginId}`] || {};

export const getPluginServerRoute = (state) => {
    const config = getConfig(state);

    let basePath = '';
    if (config?.SiteURL) {
        basePath = new URL(config.SiteURL).pathname;
        basePath.replace(/\/$/, '');
    }

    return basePath;
};

export const getAuthenticationResult = (state) => getPluginState(state).authenticationResult;
