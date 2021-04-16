/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Event } from './Event';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* An event list response.
*/

export class EventListResponse {
    /**
    * An array of events.
    */
    'events'?: Array<Event>;
    /**
    * A status.
    */
    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "events": {
            "baseName": "events",
            "type": "Array<Event>",
            "format": ""
        },
        "status": {
            "baseName": "status",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return EventListResponse.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): EventListResponse {
      let res = new EventListResponse();

      res.events = ObjectSerializer.deserialize(data.events, "Array<Event>", "")

      res.status = ObjectSerializer.deserialize(data.status, "string", "")


      return res;
    }

    static serialize(data: EventListResponse): {[key: string]: any} {
        let attributeTypes = EventListResponse.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.events = ObjectSerializer.serialize(data.events, "Array<Event>", "")

        res.status = ObjectSerializer.serialize(data.status, "string", "")

        return res
    }
    
    public constructor() {
    }
}



