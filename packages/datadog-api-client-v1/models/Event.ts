/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EventAlertType } from './EventAlertType';
import { EventPriority } from './EventPriority';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Object representing an event.
*/

export class Event {
    'alertType'?: EventAlertType;
    /**
    * POSIX timestamp of the event. Must be sent as an integer (i.e. no quotes). Limited to events no older than 7 days.
    */
    'dateHappened'?: number;
    /**
    * A device name.
    */
    'deviceName'?: string;
    /**
    * Host name to associate with the event. Any tags associated with the host are also applied to this event.
    */
    'host'?: string;
    /**
    * Integer ID of the event.
    */
    'id'?: number;
    /**
    * Payload of the event.
    */
    'payload'?: string;
    'priority'?: EventPriority;
    /**
    * The type of event being posted. Option examples include nagios, hudson, jenkins, my_apps, chef, puppet, git, bitbucket, etc. A complete list of source attribute values [available here](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
    */
    'sourceTypeName'?: string;
    /**
    * A list of tags to apply to the event.
    */
    'tags'?: Array<string>;
    /**
    * The body of the event. Limited to 4000 characters. The text supports markdown. To use markdown in the event text, start the text block with `%%% \\n` and end the text block with `\\n %%%`. Use `msg_text` with the Datadog Ruby library.
    */
    'text'?: string;
    /**
    * The event title. Limited to 100 characters. Use `msg_title` with the Datadog Ruby library.
    */
    'title'?: string;
    /**
    * URL of the event.
    */
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "alertType": {
            "baseName": "alert_type",
            "type": "EventAlertType",
            "format": ""
        },
        "dateHappened": {
            "baseName": "date_happened",
            "type": "number",
            "format": "int64"
        },
        "deviceName": {
            "baseName": "device_name",
            "type": "string",
            "format": ""
        },
        "host": {
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        "payload": {
            "baseName": "payload",
            "type": "string",
            "format": ""
        },
        "priority": {
            "baseName": "priority",
            "type": "EventPriority",
            "format": ""
        },
        "sourceTypeName": {
            "baseName": "source_type_name",
            "type": "string",
            "format": ""
        },
        "tags": {
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        "text": {
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        "title": {
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        "url": {
            "baseName": "url",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return Event.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): Event {
      let res = new Event();

      if (['error', 'warning', 'info', 'success', 'user_update', 'recommendation', 'snapshot', undefined].includes(data.alert_type)) {
          res.alertType = data.alert_type;
      } else {
          throw TypeError(`invalid enum value ${ data.alert_type } for alert_type`);
      }

      res.dateHappened = ObjectSerializer.deserialize(data.date_happened, "number", "int64")

      res.deviceName = ObjectSerializer.deserialize(data.device_name, "string", "")

      res.host = ObjectSerializer.deserialize(data.host, "string", "")

      res.id = ObjectSerializer.deserialize(data.id, "number", "int64")

      res.payload = ObjectSerializer.deserialize(data.payload, "string", "")

      if (['normal', 'low', undefined].includes(data.priority)) {
          res.priority = data.priority;
      } else {
          throw TypeError(`invalid enum value ${ data.priority } for priority`);
      }

      res.sourceTypeName = ObjectSerializer.deserialize(data.source_type_name, "string", "")

      res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "")

      res.text = ObjectSerializer.deserialize(data.text, "string", "")

      res.title = ObjectSerializer.deserialize(data.title, "string", "")

      res.url = ObjectSerializer.deserialize(data.url, "string", "")


      return res;
    }

    static serialize(data: Event): {[key: string]: any} {
        let attributeTypes = Event.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (['error', 'warning', 'info', 'success', 'user_update', 'recommendation', 'snapshot', undefined].includes(data.alertType)) {
            res.alert_type = data.alertType;
        } else {
            throw TypeError(`invalid enum value ${ data.alertType } for alertType`);
        }

        res.date_happened = ObjectSerializer.serialize(data.dateHappened, "number", "int64")

        res.device_name = ObjectSerializer.serialize(data.deviceName, "string", "")

        res.host = ObjectSerializer.serialize(data.host, "string", "")

        res.id = ObjectSerializer.serialize(data.id, "number", "int64")

        res.payload = ObjectSerializer.serialize(data.payload, "string", "")

        if (['normal', 'low', undefined].includes(data.priority)) {
            res.priority = data.priority;
        } else {
            throw TypeError(`invalid enum value ${ data.priority } for priority`);
        }

        res.source_type_name = ObjectSerializer.serialize(data.sourceTypeName, "string", "")

        res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "")

        res.text = ObjectSerializer.serialize(data.text, "string", "")

        res.title = ObjectSerializer.serialize(data.title, "string", "")

        res.url = ObjectSerializer.serialize(data.url, "string", "")

        return res
    }
    
    public constructor() {
    }
}



