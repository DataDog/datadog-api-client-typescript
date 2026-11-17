import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { APIKeyCreateAttributes } from "./APIKeyCreateAttributes";
import { APIKeyCreateData } from "./APIKeyCreateData";
import { APIKeyCreateRequest } from "./APIKeyCreateRequest";
import { APIKeyRelationships } from "./APIKeyRelationships";
import { APIKeyResponse } from "./APIKeyResponse";
import { APIKeyUpdateAttributes } from "./APIKeyUpdateAttributes";
import { APIKeyUpdateData } from "./APIKeyUpdateData";
import { APIKeyUpdateRequest } from "./APIKeyUpdateRequest";
import { APIKeysResponse } from "./APIKeysResponse";
import { APIKeysResponseMeta } from "./APIKeysResponseMeta";
import { APIKeysResponseMetaPage } from "./APIKeysResponseMetaPage";
import { AWSCloudAuthIntakeMappingAttributesResponse } from "./AWSCloudAuthIntakeMappingAttributesResponse";
import { AWSCloudAuthIntakeMappingCreateAttributes } from "./AWSCloudAuthIntakeMappingCreateAttributes";
import { AWSCloudAuthIntakeMappingCreateData } from "./AWSCloudAuthIntakeMappingCreateData";
import { AWSCloudAuthIntakeMappingCreateRequest } from "./AWSCloudAuthIntakeMappingCreateRequest";
import { AWSCloudAuthIntakeMappingDataResponse } from "./AWSCloudAuthIntakeMappingDataResponse";
import { AWSCloudAuthIntakeMappingResponse } from "./AWSCloudAuthIntakeMappingResponse";
import { AWSCloudAuthIntakeMappingsResponse } from "./AWSCloudAuthIntakeMappingsResponse";
import { AWSCloudAuthPersonaMappingAttributesResponse } from "./AWSCloudAuthPersonaMappingAttributesResponse";
import { AWSCloudAuthPersonaMappingCreateAttributes } from "./AWSCloudAuthPersonaMappingCreateAttributes";
import { AWSCloudAuthPersonaMappingCreateData } from "./AWSCloudAuthPersonaMappingCreateData";
import { AWSCloudAuthPersonaMappingCreateRequest } from "./AWSCloudAuthPersonaMappingCreateRequest";
import { AWSCloudAuthPersonaMappingDataResponse } from "./AWSCloudAuthPersonaMappingDataResponse";
import { AWSCloudAuthPersonaMappingResponse } from "./AWSCloudAuthPersonaMappingResponse";
import { AWSCloudAuthPersonaMappingsResponse } from "./AWSCloudAuthPersonaMappingsResponse";
import { AccessTokenListItem } from "./AccessTokenListItem";
import { AccessTokenListItemRelationships } from "./AccessTokenListItemRelationships";
import { AnonymizeUserError } from "./AnonymizeUserError";
import { AnonymizeUsersRequest } from "./AnonymizeUsersRequest";
import { AnonymizeUsersRequestAttributes } from "./AnonymizeUsersRequestAttributes";
import { AnonymizeUsersRequestData } from "./AnonymizeUsersRequestData";
import { AnonymizeUsersResponse } from "./AnonymizeUsersResponse";
import { AnonymizeUsersResponseAttributes } from "./AnonymizeUsersResponseAttributes";
import { AnonymizeUsersResponseData } from "./AnonymizeUsersResponseData";
import { ApplicationKeyCreateAttributes } from "./ApplicationKeyCreateAttributes";
import { ApplicationKeyCreateData } from "./ApplicationKeyCreateData";
import { ApplicationKeyCreateRequest } from "./ApplicationKeyCreateRequest";
import { ApplicationKeyRelationships } from "./ApplicationKeyRelationships";
import { ApplicationKeyResponse } from "./ApplicationKeyResponse";
import { ApplicationKeyResponseMeta } from "./ApplicationKeyResponseMeta";
import { ApplicationKeyResponseMetaPage } from "./ApplicationKeyResponseMetaPage";
import { ApplicationKeyUpdateAttributes } from "./ApplicationKeyUpdateAttributes";
import { ApplicationKeyUpdateData } from "./ApplicationKeyUpdateData";
import { ApplicationKeyUpdateRequest } from "./ApplicationKeyUpdateRequest";
import { AuthNMapping } from "./AuthNMapping";
import { AuthNMappingAttributes } from "./AuthNMappingAttributes";
import { AuthNMappingCreateAttributes } from "./AuthNMappingCreateAttributes";
import { AuthNMappingCreateData } from "./AuthNMappingCreateData";
import { AuthNMappingCreateRequest } from "./AuthNMappingCreateRequest";
import { AuthNMappingRelationshipToRole } from "./AuthNMappingRelationshipToRole";
import { AuthNMappingRelationshipToTeam } from "./AuthNMappingRelationshipToTeam";
import { AuthNMappingRelationships } from "./AuthNMappingRelationships";
import { AuthNMappingResponse } from "./AuthNMappingResponse";
import { AuthNMappingTeam } from "./AuthNMappingTeam";
import { AuthNMappingTeamAttributes } from "./AuthNMappingTeamAttributes";
import { AuthNMappingUpdateAttributes } from "./AuthNMappingUpdateAttributes";
import { AuthNMappingUpdateData } from "./AuthNMappingUpdateData";
import { AuthNMappingUpdateRequest } from "./AuthNMappingUpdateRequest";
import { AuthNMappingsResponse } from "./AuthNMappingsResponse";
import { CustomerOrgDisableRequest } from "./CustomerOrgDisableRequest";
import { CustomerOrgDisableRequestAttributes } from "./CustomerOrgDisableRequestAttributes";
import { CustomerOrgDisableRequestData } from "./CustomerOrgDisableRequestData";
import { CustomerOrgDisableResponse } from "./CustomerOrgDisableResponse";
import { CustomerOrgDisableResponseAttributes } from "./CustomerOrgDisableResponseAttributes";
import { CustomerOrgDisableResponseData } from "./CustomerOrgDisableResponseData";
import { DatasetAttributesRequest } from "./DatasetAttributesRequest";
import { DatasetAttributesResponse } from "./DatasetAttributesResponse";
import { DatasetCreateRequest } from "./DatasetCreateRequest";
import { DatasetRequest } from "./DatasetRequest";
import { DatasetResponse } from "./DatasetResponse";
import { DatasetResponseMulti } from "./DatasetResponseMulti";
import { DatasetResponseSingle } from "./DatasetResponseSingle";
import { DatasetUpdateRequest } from "./DatasetUpdateRequest";
import { DomainAllowlist } from "./DomainAllowlist";
import { DomainAllowlistAttributes } from "./DomainAllowlistAttributes";
import { DomainAllowlistRequest } from "./DomainAllowlistRequest";
import { DomainAllowlistResponse } from "./DomainAllowlistResponse";
import { DomainAllowlistResponseData } from "./DomainAllowlistResponseData";
import { DomainAllowlistResponseDataAttributes } from "./DomainAllowlistResponseDataAttributes";
import { FiltersPerProduct } from "./FiltersPerProduct";
import { FullAPIKey } from "./FullAPIKey";
import { FullAPIKeyAttributes } from "./FullAPIKeyAttributes";
import { FullApplicationKey } from "./FullApplicationKey";
import { FullApplicationKeyAttributes } from "./FullApplicationKeyAttributes";
import { FullPersonalAccessToken } from "./FullPersonalAccessToken";
import { FullPersonalAccessTokenAttributes } from "./FullPersonalAccessTokenAttributes";
import { FullPersonalAccessTokenRelationships } from "./FullPersonalAccessTokenRelationships";
import { FullServiceAccessToken } from "./FullServiceAccessToken";
import { FullServiceAccessTokenAttributes } from "./FullServiceAccessTokenAttributes";
import { FullServiceAccessTokenRelationships } from "./FullServiceAccessTokenRelationships";
import { GitHubCloudAuthIntakeMappingAttributesResponse } from "./GitHubCloudAuthIntakeMappingAttributesResponse";
import { GitHubCloudAuthIntakeMappingCreateAttributes } from "./GitHubCloudAuthIntakeMappingCreateAttributes";
import { GitHubCloudAuthIntakeMappingCreateData } from "./GitHubCloudAuthIntakeMappingCreateData";
import { GitHubCloudAuthIntakeMappingCreateRequest } from "./GitHubCloudAuthIntakeMappingCreateRequest";
import { GitHubCloudAuthIntakeMappingDataResponse } from "./GitHubCloudAuthIntakeMappingDataResponse";
import { GitHubCloudAuthIntakeMappingResponse } from "./GitHubCloudAuthIntakeMappingResponse";
import { GitHubCloudAuthIntakeMappingsResponse } from "./GitHubCloudAuthIntakeMappingsResponse";
import { GitHubCloudAuthPersonaMappingAttributesResponse } from "./GitHubCloudAuthPersonaMappingAttributesResponse";
import { GitHubCloudAuthPersonaMappingCreateAttributes } from "./GitHubCloudAuthPersonaMappingCreateAttributes";
import { GitHubCloudAuthPersonaMappingCreateData } from "./GitHubCloudAuthPersonaMappingCreateData";
import { GitHubCloudAuthPersonaMappingCreateRequest } from "./GitHubCloudAuthPersonaMappingCreateRequest";
import { GitHubCloudAuthPersonaMappingDataResponse } from "./GitHubCloudAuthPersonaMappingDataResponse";
import { GitHubCloudAuthPersonaMappingResponse } from "./GitHubCloudAuthPersonaMappingResponse";
import { GitHubCloudAuthPersonaMappingsResponse } from "./GitHubCloudAuthPersonaMappingsResponse";
import { GitHubOIDCClaimPatterns } from "./GitHubOIDCClaimPatterns";
import { GlobalOrg } from "./GlobalOrg";
import { GlobalOrgAttributes } from "./GlobalOrgAttributes";
import { GlobalOrgData } from "./GlobalOrgData";
import { GlobalOrgUser } from "./GlobalOrgUser";
import { GlobalOrgsLinks } from "./GlobalOrgsLinks";
import { GlobalOrgsMeta } from "./GlobalOrgsMeta";
import { GlobalOrgsMetaPage } from "./GlobalOrgsMetaPage";
import { GlobalOrgsResponse } from "./GlobalOrgsResponse";
import { IPAllowlistAttributes } from "./IPAllowlistAttributes";
import { IPAllowlistData } from "./IPAllowlistData";
import { IPAllowlistEntry } from "./IPAllowlistEntry";
import { IPAllowlistEntryAttributes } from "./IPAllowlistEntryAttributes";
import { IPAllowlistEntryData } from "./IPAllowlistEntryData";
import { IPAllowlistResponse } from "./IPAllowlistResponse";
import { IPAllowlistUpdateRequest } from "./IPAllowlistUpdateRequest";
import { IdentityProviderAttributes } from "./IdentityProviderAttributes";
import { IdentityProviderData } from "./IdentityProviderData";
import { IdentityProviderResponse } from "./IdentityProviderResponse";
import { IdentityProviderUpdateAttributes } from "./IdentityProviderUpdateAttributes";
import { IdentityProviderUpdateData } from "./IdentityProviderUpdateData";
import { IdentityProviderUpdateRequest } from "./IdentityProviderUpdateRequest";
import { IdentityProvidersResponse } from "./IdentityProvidersResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { LeakedKey } from "./LeakedKey";
import { LeakedKeyAttributes } from "./LeakedKeyAttributes";
import { ListApplicationKeysResponse } from "./ListApplicationKeysResponse";
import { ListPersonalAccessTokensResponse } from "./ListPersonalAccessTokensResponse";
import { ListServiceAccessTokensResponse } from "./ListServiceAccessTokensResponse";
import { ManagedOrgsData } from "./ManagedOrgsData";
import { ManagedOrgsRelationshipToOrg } from "./ManagedOrgsRelationshipToOrg";
import { ManagedOrgsRelationshipToOrgs } from "./ManagedOrgsRelationshipToOrgs";
import { ManagedOrgsRelationships } from "./ManagedOrgsRelationships";
import { ManagedOrgsResponse } from "./ManagedOrgsResponse";
import { MaxSessionDurationUpdateAttributes } from "./MaxSessionDurationUpdateAttributes";
import { MaxSessionDurationUpdateData } from "./MaxSessionDurationUpdateData";
import { MaxSessionDurationUpdateRequest } from "./MaxSessionDurationUpdateRequest";
import { NullableRelationshipToUser } from "./NullableRelationshipToUser";
import { NullableRelationshipToUserData } from "./NullableRelationshipToUserData";
import { OAuth2WellKnownSitesAttributes } from "./OAuth2WellKnownSitesAttributes";
import { OAuth2WellKnownSitesData } from "./OAuth2WellKnownSitesData";
import { OAuth2WellKnownSitesResponse } from "./OAuth2WellKnownSitesResponse";
import { OAuthClientRegistrationError } from "./OAuthClientRegistrationError";
import { OAuthClientRegistrationRequest } from "./OAuthClientRegistrationRequest";
import { OAuthClientRegistrationResponse } from "./OAuthClientRegistrationResponse";
import { OAuthScopesRestriction } from "./OAuthScopesRestriction";
import { OAuthScopesRestrictionResponse } from "./OAuthScopesRestrictionResponse";
import { OAuthScopesRestrictionResponseAttributes } from "./OAuthScopesRestrictionResponseAttributes";
import { OAuthScopesRestrictionResponseData } from "./OAuthScopesRestrictionResponseData";
import { OIDCCloudAuthClaimMatcher } from "./OIDCCloudAuthClaimMatcher";
import { OIDCCloudAuthClaimMatcherCreate } from "./OIDCCloudAuthClaimMatcherCreate";
import { OIDCCloudAuthPersonaMappingAttributesResponse } from "./OIDCCloudAuthPersonaMappingAttributesResponse";
import { OIDCCloudAuthPersonaMappingCreateAttributes } from "./OIDCCloudAuthPersonaMappingCreateAttributes";
import { OIDCCloudAuthPersonaMappingCreateData } from "./OIDCCloudAuthPersonaMappingCreateData";
import { OIDCCloudAuthPersonaMappingCreateRequest } from "./OIDCCloudAuthPersonaMappingCreateRequest";
import { OIDCCloudAuthPersonaMappingDataResponse } from "./OIDCCloudAuthPersonaMappingDataResponse";
import { OIDCCloudAuthPersonaMappingResponse } from "./OIDCCloudAuthPersonaMappingResponse";
import { OIDCCloudAuthPersonaMappingsResponse } from "./OIDCCloudAuthPersonaMappingsResponse";
import { OIDCCloudAuthProviderAttributesResponse } from "./OIDCCloudAuthProviderAttributesResponse";
import { OIDCCloudAuthProviderCreateAttributes } from "./OIDCCloudAuthProviderCreateAttributes";
import { OIDCCloudAuthProviderCreateData } from "./OIDCCloudAuthProviderCreateData";
import { OIDCCloudAuthProviderCreateRequest } from "./OIDCCloudAuthProviderCreateRequest";
import { OIDCCloudAuthProviderDataResponse } from "./OIDCCloudAuthProviderDataResponse";
import { OIDCCloudAuthProviderResponse } from "./OIDCCloudAuthProviderResponse";
import { OIDCCloudAuthProvidersResponse } from "./OIDCCloudAuthProvidersResponse";
import { OIDCDiscoveryDocument } from "./OIDCDiscoveryDocument";
import { OrgAttributes } from "./OrgAttributes";
import { OrgAuthorizedClientAttributes } from "./OrgAuthorizedClientAttributes";
import { OrgAuthorizedClientData } from "./OrgAuthorizedClientData";
import { OrgAuthorizedClientRelationshipOAuth2Client } from "./OrgAuthorizedClientRelationshipOAuth2Client";
import { OrgAuthorizedClientRelationshipOAuth2ClientData } from "./OrgAuthorizedClientRelationshipOAuth2ClientData";
import { OrgAuthorizedClientRelationshipUserAuthorizedClients } from "./OrgAuthorizedClientRelationshipUserAuthorizedClients";
import { OrgAuthorizedClientRelationshipUserAuthorizedClientsData } from "./OrgAuthorizedClientRelationshipUserAuthorizedClientsData";
import { OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks } from "./OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks";
import { OrgAuthorizedClientRelationships } from "./OrgAuthorizedClientRelationships";
import { OrgAuthorizedClientResponse } from "./OrgAuthorizedClientResponse";
import { OrgAuthorizedClientUpdateAttributes } from "./OrgAuthorizedClientUpdateAttributes";
import { OrgAuthorizedClientUpdateData } from "./OrgAuthorizedClientUpdateData";
import { OrgAuthorizedClientUpdateRequest } from "./OrgAuthorizedClientUpdateRequest";
import { OrgAuthorizedClientsResponse } from "./OrgAuthorizedClientsResponse";
import { OrgConfigGetResponse } from "./OrgConfigGetResponse";
import { OrgConfigListResponse } from "./OrgConfigListResponse";
import { OrgConfigRead } from "./OrgConfigRead";
import { OrgConfigReadAttributes } from "./OrgConfigReadAttributes";
import { OrgConfigWrite } from "./OrgConfigWrite";
import { OrgConfigWriteAttributes } from "./OrgConfigWriteAttributes";
import { OrgConfigWriteRequest } from "./OrgConfigWriteRequest";
import { OrgData } from "./OrgData";
import { OrgRelationshipData } from "./OrgRelationshipData";
import { OrgSAMLPreferencesAttributes } from "./OrgSAMLPreferencesAttributes";
import { OrgSAMLPreferencesData } from "./OrgSAMLPreferencesData";
import { OrgSAMLPreferencesUpdateRequest } from "./OrgSAMLPreferencesUpdateRequest";
import { Organization } from "./Organization";
import { OrganizationAttributes } from "./OrganizationAttributes";
import { Pagination } from "./Pagination";
import { PartialAPIKey } from "./PartialAPIKey";
import { PartialAPIKeyAttributes } from "./PartialAPIKeyAttributes";
import { PartialApplicationKey } from "./PartialApplicationKey";
import { PartialApplicationKeyAttributes } from "./PartialApplicationKeyAttributes";
import { PartialApplicationKeyResponse } from "./PartialApplicationKeyResponse";
import { Permission } from "./Permission";
import { PermissionAttributes } from "./PermissionAttributes";
import { PermissionsResponse } from "./PermissionsResponse";
import { PersonalAccessToken } from "./PersonalAccessToken";
import { PersonalAccessTokenAttributes } from "./PersonalAccessTokenAttributes";
import { PersonalAccessTokenCreateAttributes } from "./PersonalAccessTokenCreateAttributes";
import { PersonalAccessTokenCreateData } from "./PersonalAccessTokenCreateData";
import { PersonalAccessTokenCreateRequest } from "./PersonalAccessTokenCreateRequest";
import { PersonalAccessTokenCreateResponse } from "./PersonalAccessTokenCreateResponse";
import { PersonalAccessTokenRelationships } from "./PersonalAccessTokenRelationships";
import { PersonalAccessTokenResponse } from "./PersonalAccessTokenResponse";
import { PersonalAccessTokenResponseMeta } from "./PersonalAccessTokenResponseMeta";
import { PersonalAccessTokenResponseMetaPage } from "./PersonalAccessTokenResponseMetaPage";
import { PersonalAccessTokenUpdateAttributes } from "./PersonalAccessTokenUpdateAttributes";
import { PersonalAccessTokenUpdateData } from "./PersonalAccessTokenUpdateData";
import { PersonalAccessTokenUpdateRequest } from "./PersonalAccessTokenUpdateRequest";
import { RelationshipToAccessTokenOwner } from "./RelationshipToAccessTokenOwner";
import { RelationshipToAccessTokenOwnerData } from "./RelationshipToAccessTokenOwnerData";
import { RelationshipToLeakedKey } from "./RelationshipToLeakedKey";
import { RelationshipToLeakedKeyData } from "./RelationshipToLeakedKeyData";
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToPermission } from "./RelationshipToPermission";
import { RelationshipToPermissionData } from "./RelationshipToPermissionData";
import { RelationshipToPermissions } from "./RelationshipToPermissions";
import { RelationshipToRole } from "./RelationshipToRole";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToSAMLAssertionAttribute } from "./RelationshipToSAMLAssertionAttribute";
import { RelationshipToSAMLAssertionAttributeData } from "./RelationshipToSAMLAssertionAttributeData";
import { RelationshipToServiceAccount } from "./RelationshipToServiceAccount";
import { RelationshipToServiceAccountData } from "./RelationshipToServiceAccountData";
import { RelationshipToTeam } from "./RelationshipToTeam";
import { RelationshipToTeamData } from "./RelationshipToTeamData";
import { RelationshipToUser } from "./RelationshipToUser";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { RestrictionPolicy } from "./RestrictionPolicy";
import { RestrictionPolicyAttributes } from "./RestrictionPolicyAttributes";
import { RestrictionPolicyBinding } from "./RestrictionPolicyBinding";
import { RestrictionPolicyResponse } from "./RestrictionPolicyResponse";
import { RestrictionPolicyUpdateRequest } from "./RestrictionPolicyUpdateRequest";
import { Role } from "./Role";
import { RoleAttributes } from "./RoleAttributes";
import { RoleClone } from "./RoleClone";
import { RoleCloneAttributes } from "./RoleCloneAttributes";
import { RoleCloneRequest } from "./RoleCloneRequest";
import { RoleCreateAttributes } from "./RoleCreateAttributes";
import { RoleCreateData } from "./RoleCreateData";
import { RoleCreateRequest } from "./RoleCreateRequest";
import { RoleCreateResponse } from "./RoleCreateResponse";
import { RoleCreateResponseData } from "./RoleCreateResponseData";
import { RoleRelationships } from "./RoleRelationships";
import { RoleResponse } from "./RoleResponse";
import { RoleResponseRelationships } from "./RoleResponseRelationships";
import { RoleTemplateArray } from "./RoleTemplateArray";
import { RoleTemplateData } from "./RoleTemplateData";
import { RoleTemplateDataAttributes } from "./RoleTemplateDataAttributes";
import { RoleUpdateAttributes } from "./RoleUpdateAttributes";
import { RoleUpdateData } from "./RoleUpdateData";
import { RoleUpdateRequest } from "./RoleUpdateRequest";
import { RoleUpdateResponse } from "./RoleUpdateResponse";
import { RoleUpdateResponseData } from "./RoleUpdateResponseData";
import { RolesResponse } from "./RolesResponse";
import { SAMLAssertionAttribute } from "./SAMLAssertionAttribute";
import { SAMLAssertionAttributeAttributes } from "./SAMLAssertionAttributeAttributes";
import { SAMLConfiguration } from "./SAMLConfiguration";
import { SAMLConfigurationAttributes } from "./SAMLConfigurationAttributes";
import { SAMLConfigurationRelationships } from "./SAMLConfigurationRelationships";
import { SAMLConfigurationResponse } from "./SAMLConfigurationResponse";
import { SAMLConfigurationUpdateAttributes } from "./SAMLConfigurationUpdateAttributes";
import { SAMLConfigurationUpdateData } from "./SAMLConfigurationUpdateData";
import { SAMLConfigurationUpdateRequest } from "./SAMLConfigurationUpdateRequest";
import { SAMLConfigurationsResponse } from "./SAMLConfigurationsResponse";
import { ServiceAccessToken } from "./ServiceAccessToken";
import { ServiceAccessTokenAttributes } from "./ServiceAccessTokenAttributes";
import { ServiceAccessTokenCreateResponse } from "./ServiceAccessTokenCreateResponse";
import { ServiceAccessTokenRelationships } from "./ServiceAccessTokenRelationships";
import { ServiceAccessTokenResponse } from "./ServiceAccessTokenResponse";
import { ServiceAccessTokenResponseMeta } from "./ServiceAccessTokenResponseMeta";
import { ServiceAccessTokenResponseMetaPage } from "./ServiceAccessTokenResponseMetaPage";
import { ServiceAccountAccessTokenCreateAttributes } from "./ServiceAccountAccessTokenCreateAttributes";
import { ServiceAccountAccessTokenCreateData } from "./ServiceAccountAccessTokenCreateData";
import { ServiceAccountAccessTokenCreateRequest } from "./ServiceAccountAccessTokenCreateRequest";
import { ServiceAccountAccessTokenUpdateAttributes } from "./ServiceAccountAccessTokenUpdateAttributes";
import { ServiceAccountAccessTokenUpdateData } from "./ServiceAccountAccessTokenUpdateData";
import { ServiceAccountAccessTokenUpdateRequest } from "./ServiceAccountAccessTokenUpdateRequest";
import { ServiceAccountCreateAttributes } from "./ServiceAccountCreateAttributes";
import { ServiceAccountCreateData } from "./ServiceAccountCreateData";
import { ServiceAccountCreateRequest } from "./ServiceAccountCreateRequest";
import { UpdateUserIdentityProvidersRequest } from "./UpdateUserIdentityProvidersRequest";
import { UpdatedPersonalAccessToken } from "./UpdatedPersonalAccessToken";
import { UpdatedPersonalAccessTokenRelationships } from "./UpdatedPersonalAccessTokenRelationships";
import { UpdatedPersonalAccessTokenResponse } from "./UpdatedPersonalAccessTokenResponse";
import { UpdatedServiceAccessToken } from "./UpdatedServiceAccessToken";
import { UpdatedServiceAccessTokenRelationships } from "./UpdatedServiceAccessTokenRelationships";
import { UpdatedServiceAccessTokenResponse } from "./UpdatedServiceAccessTokenResponse";
import { UpsertOAuthScopesRestrictionData } from "./UpsertOAuthScopesRestrictionData";
import { UpsertOAuthScopesRestrictionDataAttributes } from "./UpsertOAuthScopesRestrictionDataAttributes";
import { UpsertOAuthScopesRestrictionRequest } from "./UpsertOAuthScopesRestrictionRequest";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserAuthorizedClientAttributes } from "./UserAuthorizedClientAttributes";
import { UserAuthorizedClientData } from "./UserAuthorizedClientData";
import { UserAuthorizedClientRelationshipOAuth2Client } from "./UserAuthorizedClientRelationshipOAuth2Client";
import { UserAuthorizedClientRelationshipOAuth2ClientData } from "./UserAuthorizedClientRelationshipOAuth2ClientData";
import { UserAuthorizedClientRelationshipScopeData } from "./UserAuthorizedClientRelationshipScopeData";
import { UserAuthorizedClientRelationshipScopes } from "./UserAuthorizedClientRelationshipScopes";
import { UserAuthorizedClientRelationshipUser } from "./UserAuthorizedClientRelationshipUser";
import { UserAuthorizedClientRelationshipUserData } from "./UserAuthorizedClientRelationshipUserData";
import { UserAuthorizedClientRelationships } from "./UserAuthorizedClientRelationships";
import { UserAuthorizedClientResponse } from "./UserAuthorizedClientResponse";
import { UserAuthorizedClientsResponse } from "./UserAuthorizedClientsResponse";
import { UserCreateAttributes } from "./UserCreateAttributes";
import { UserCreateData } from "./UserCreateData";
import { UserCreateRequest } from "./UserCreateRequest";
import { UserInvitationData } from "./UserInvitationData";
import { UserInvitationDataAttributes } from "./UserInvitationDataAttributes";
import { UserInvitationRelationships } from "./UserInvitationRelationships";
import { UserInvitationResponse } from "./UserInvitationResponse";
import { UserInvitationResponseData } from "./UserInvitationResponseData";
import { UserInvitationsRequest } from "./UserInvitationsRequest";
import { UserInvitationsResponse } from "./UserInvitationsResponse";
import { UserOverrideIdentityProviderAttributes } from "./UserOverrideIdentityProviderAttributes";
import { UserOverrideIdentityProviderData } from "./UserOverrideIdentityProviderData";
import { UserOverrideIdentityProvidersResponse } from "./UserOverrideIdentityProvidersResponse";
import { UserRelationshipIdentityProviderData } from "./UserRelationshipIdentityProviderData";
import { UserRelationships } from "./UserRelationships";
import { UserResponse } from "./UserResponse";
import { UserResponseRelationships } from "./UserResponseRelationships";
import { UserUpdateAttributes } from "./UserUpdateAttributes";
import { UserUpdateData } from "./UserUpdateData";
import { UserUpdateRequest } from "./UserUpdateRequest";
import { UsersResponse } from "./UsersResponse";
import { ValidateAPIKeyResponse } from "./ValidateAPIKeyResponse";
import { ValidateV2Attributes } from "./ValidateV2Attributes";
import { ValidateV2Data } from "./ValidateV2Data";
import { ValidateV2Response } from "./ValidateV2Response";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    APIKeysSort: [
      "created_at",
      "-created_at",
      "last4",
      "-last4",
      "modified_at",
      "-modified_at",
      "name",
      "-name",
    ],
    APIKeysType: ["api_keys"],
    AWSCloudAuthIntakeMappingType: ["aws_cloud_auth_intake_mapping"],
    AWSCloudAuthPersonaMappingType: ["aws_cloud_auth_config"],
    AccessTokenOwnerType: ["users", "service_account"],
    AccessTokensType: ["personal_access_tokens", "service_access_tokens"],
    AnonymizeUsersRequestType: ["anonymize_users_request"],
    AnonymizeUsersResponseType: ["anonymize_users_response"],
    ApplicationKeysSort: [
      "created_at",
      "-created_at",
      "last4",
      "-last4",
      "name",
      "-name",
    ],
    ApplicationKeysType: ["application_keys"],
    AuthNMappingResourceType: ["role", "team"],
    AuthNMappingsSort: [
      "created_at",
      "-created_at",
      "role_id",
      "-role_id",
      "saml_assertion_attribute_id",
      "-saml_assertion_attribute_id",
      "role.name",
      "-role.name",
      "saml_assertion_attribute.attribute_key",
      "-saml_assertion_attribute.attribute_key",
      "saml_assertion_attribute.attribute_value",
      "-saml_assertion_attribute.attribute_value",
    ],
    AuthNMappingsType: ["authn_mappings"],
    CustomerOrgDisableResponseType: ["org_disable"],
    CustomerOrgDisableStatus: ["disabled", "pending_disable"],
    CustomerOrgDisableType: ["customer_org_disable"],
    DatasetType: ["dataset"],
    DomainAllowlistType: ["domain_allowlist"],
    GitHubCloudAuthIntakeMappingType: ["github_oidc_auth_intake_mapping"],
    GitHubCloudAuthPersonaMappingType: ["github_oidc_auth_config"],
    GlobalOrgType: ["global_user_orgs"],
    GlobalOrgsMetaPageType: ["cursor"],
    IPAllowlistEntryType: ["ip_allowlist_entry"],
    IPAllowlistType: ["ip_allowlist"],
    IdentityProviderType: ["identity_providers"],
    LeakedKeyType: ["leaked_keys"],
    ManagedOrgsType: ["managed_orgs"],
    MaxSessionDurationType: ["max_session_duration"],
    OAuth2WellKnownSitesEnvType: ["env"],
    OAuthClientRegistrationGrantType: ["authorization_code", "refresh_token"],
    OAuthClientRegistrationResponseType: ["code"],
    OAuthOidcScope: ["openid", "profile", "email", "offline_access"],
    OAuthScopesRestrictionType: ["scopes_restriction"],
    OIDCCloudAuthClaimMatchMode: ["exact", "glob"],
    OIDCCloudAuthDiscoveryType: ["oidc_discovery", "direct_jwks"],
    OIDCCloudAuthOrgUUIDSource: ["dd_org_uuid", "aud"],
    OIDCCloudAuthPersonaMappingType: ["custom_oidc_identity_mapping"],
    OIDCCloudAuthProviderType: ["custom_oidc_provider_config"],
    OrgAuthorizedClientRelationshipOAuth2ClientDataType: ["oauth2_clients"],
    OrgAuthorizedClientRelationshipUserAuthorizedClientsDataType: [
      "user_authorized_clients",
    ],
    OrgAuthorizedClientType: ["org_authorized_clients"],
    OrgAuthorizedClientUserAuthorizationsSort: [
      "user.name",
      "user.email",
      "oauth2_client.name",
    ],
    OrgConfigType: ["org_configs"],
    OrgResourceType: ["orgs"],
    OrgSAMLPreferencesType: ["saml_preferences"],
    OrganizationsType: ["orgs"],
    PermissionsType: ["permissions"],
    PersonalAccessTokensIncludeQueryParameterItem: ["leak_information"],
    PersonalAccessTokensSort: [
      "name",
      "-name",
      "created_at",
      "-created_at",
      "expires_at",
      "-expires_at",
      "last_used_at",
      "-last_used_at",
      "leaked",
      "-leaked",
    ],
    PersonalAccessTokensType: ["personal_access_tokens"],
    QuerySortOrder: ["asc", "desc"],
    RestrictionPolicyType: ["restriction_policy"],
    RoleTemplateDataType: ["roles"],
    RolesSort: [
      "name",
      "-name",
      "modified_at",
      "-modified_at",
      "user_count",
      "-user_count",
    ],
    RolesType: ["roles"],
    SAMLAssertionAttributesType: ["saml_assertion_attributes"],
    SAMLConfigurationsType: ["saml_configurations"],
    ServiceAccessTokensType: ["service_access_tokens"],
    ServiceAccountType: ["service_account"],
    TeamType: ["team"],
    UpsertOAuthScopesRestrictionType: ["upsert_scopes_restriction"],
    UserAuthorizedClientRelationshipOAuth2ClientDataType: ["oauth2_clients"],
    UserAuthorizedClientRelationshipScopeDataType: ["scopes"],
    UserAuthorizedClientRelationshipUserDataType: ["users"],
    UserAuthorizedClientType: ["user_authorized_clients"],
    UserInvitationsType: ["user_invitations"],
    UserOverrideIdentityProviderDataType: ["identity_providers"],
    UserRelationshipIdentityProviderDataType: ["identity_providers"],
    UsersType: ["users"],
    ValidateAPIKeyStatus: ["ok"],
    ValidateV2Type: ["validate_v2"],
  },
  oneOfMap: {
    APIKeyResponseIncludedItem: ["User", "LeakedKey"],
    AccessTokenResponseIncludedItem: ["LeakedKey"],
    ApplicationKeyResponseIncludedItem: ["User", "Role", "LeakedKey"],
    AuthNMappingCreateRelationships: [
      "AuthNMappingRelationshipToRole",
      "AuthNMappingRelationshipToTeam",
    ],
    AuthNMappingIncluded: [
      "SAMLAssertionAttribute",
      "Role",
      "AuthNMappingTeam",
    ],
    AuthNMappingUpdateRelationships: [
      "AuthNMappingRelationshipToRole",
      "AuthNMappingRelationshipToTeam",
    ],
    UserResponseIncludedItem: ["Organization", "Permission", "Role"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    APIKeyCreateAttributes: APIKeyCreateAttributes,
    APIKeyCreateData: APIKeyCreateData,
    APIKeyCreateRequest: APIKeyCreateRequest,
    APIKeyRelationships: APIKeyRelationships,
    APIKeyResponse: APIKeyResponse,
    APIKeyUpdateAttributes: APIKeyUpdateAttributes,
    APIKeyUpdateData: APIKeyUpdateData,
    APIKeyUpdateRequest: APIKeyUpdateRequest,
    APIKeysResponse: APIKeysResponse,
    APIKeysResponseMeta: APIKeysResponseMeta,
    APIKeysResponseMetaPage: APIKeysResponseMetaPage,
    AWSCloudAuthIntakeMappingAttributesResponse:
      AWSCloudAuthIntakeMappingAttributesResponse,
    AWSCloudAuthIntakeMappingCreateAttributes:
      AWSCloudAuthIntakeMappingCreateAttributes,
    AWSCloudAuthIntakeMappingCreateData: AWSCloudAuthIntakeMappingCreateData,
    AWSCloudAuthIntakeMappingCreateRequest:
      AWSCloudAuthIntakeMappingCreateRequest,
    AWSCloudAuthIntakeMappingDataResponse:
      AWSCloudAuthIntakeMappingDataResponse,
    AWSCloudAuthIntakeMappingResponse: AWSCloudAuthIntakeMappingResponse,
    AWSCloudAuthIntakeMappingsResponse: AWSCloudAuthIntakeMappingsResponse,
    AWSCloudAuthPersonaMappingAttributesResponse:
      AWSCloudAuthPersonaMappingAttributesResponse,
    AWSCloudAuthPersonaMappingCreateAttributes:
      AWSCloudAuthPersonaMappingCreateAttributes,
    AWSCloudAuthPersonaMappingCreateData: AWSCloudAuthPersonaMappingCreateData,
    AWSCloudAuthPersonaMappingCreateRequest:
      AWSCloudAuthPersonaMappingCreateRequest,
    AWSCloudAuthPersonaMappingDataResponse:
      AWSCloudAuthPersonaMappingDataResponse,
    AWSCloudAuthPersonaMappingResponse: AWSCloudAuthPersonaMappingResponse,
    AWSCloudAuthPersonaMappingsResponse: AWSCloudAuthPersonaMappingsResponse,
    AccessTokenListItem: AccessTokenListItem,
    AccessTokenListItemRelationships: AccessTokenListItemRelationships,
    AnonymizeUserError: AnonymizeUserError,
    AnonymizeUsersRequest: AnonymizeUsersRequest,
    AnonymizeUsersRequestAttributes: AnonymizeUsersRequestAttributes,
    AnonymizeUsersRequestData: AnonymizeUsersRequestData,
    AnonymizeUsersResponse: AnonymizeUsersResponse,
    AnonymizeUsersResponseAttributes: AnonymizeUsersResponseAttributes,
    AnonymizeUsersResponseData: AnonymizeUsersResponseData,
    ApplicationKeyCreateAttributes: ApplicationKeyCreateAttributes,
    ApplicationKeyCreateData: ApplicationKeyCreateData,
    ApplicationKeyCreateRequest: ApplicationKeyCreateRequest,
    ApplicationKeyRelationships: ApplicationKeyRelationships,
    ApplicationKeyResponse: ApplicationKeyResponse,
    ApplicationKeyResponseMeta: ApplicationKeyResponseMeta,
    ApplicationKeyResponseMetaPage: ApplicationKeyResponseMetaPage,
    ApplicationKeyUpdateAttributes: ApplicationKeyUpdateAttributes,
    ApplicationKeyUpdateData: ApplicationKeyUpdateData,
    ApplicationKeyUpdateRequest: ApplicationKeyUpdateRequest,
    AuthNMapping: AuthNMapping,
    AuthNMappingAttributes: AuthNMappingAttributes,
    AuthNMappingCreateAttributes: AuthNMappingCreateAttributes,
    AuthNMappingCreateData: AuthNMappingCreateData,
    AuthNMappingCreateRequest: AuthNMappingCreateRequest,
    AuthNMappingRelationshipToRole: AuthNMappingRelationshipToRole,
    AuthNMappingRelationshipToTeam: AuthNMappingRelationshipToTeam,
    AuthNMappingRelationships: AuthNMappingRelationships,
    AuthNMappingResponse: AuthNMappingResponse,
    AuthNMappingTeam: AuthNMappingTeam,
    AuthNMappingTeamAttributes: AuthNMappingTeamAttributes,
    AuthNMappingUpdateAttributes: AuthNMappingUpdateAttributes,
    AuthNMappingUpdateData: AuthNMappingUpdateData,
    AuthNMappingUpdateRequest: AuthNMappingUpdateRequest,
    AuthNMappingsResponse: AuthNMappingsResponse,
    CustomerOrgDisableRequest: CustomerOrgDisableRequest,
    CustomerOrgDisableRequestAttributes: CustomerOrgDisableRequestAttributes,
    CustomerOrgDisableRequestData: CustomerOrgDisableRequestData,
    CustomerOrgDisableResponse: CustomerOrgDisableResponse,
    CustomerOrgDisableResponseAttributes: CustomerOrgDisableResponseAttributes,
    CustomerOrgDisableResponseData: CustomerOrgDisableResponseData,
    DatasetAttributesRequest: DatasetAttributesRequest,
    DatasetAttributesResponse: DatasetAttributesResponse,
    DatasetCreateRequest: DatasetCreateRequest,
    DatasetRequest: DatasetRequest,
    DatasetResponse: DatasetResponse,
    DatasetResponseMulti: DatasetResponseMulti,
    DatasetResponseSingle: DatasetResponseSingle,
    DatasetUpdateRequest: DatasetUpdateRequest,
    DomainAllowlist: DomainAllowlist,
    DomainAllowlistAttributes: DomainAllowlistAttributes,
    DomainAllowlistRequest: DomainAllowlistRequest,
    DomainAllowlistResponse: DomainAllowlistResponse,
    DomainAllowlistResponseData: DomainAllowlistResponseData,
    DomainAllowlistResponseDataAttributes:
      DomainAllowlistResponseDataAttributes,
    FiltersPerProduct: FiltersPerProduct,
    FullAPIKey: FullAPIKey,
    FullAPIKeyAttributes: FullAPIKeyAttributes,
    FullApplicationKey: FullApplicationKey,
    FullApplicationKeyAttributes: FullApplicationKeyAttributes,
    FullPersonalAccessToken: FullPersonalAccessToken,
    FullPersonalAccessTokenAttributes: FullPersonalAccessTokenAttributes,
    FullPersonalAccessTokenRelationships: FullPersonalAccessTokenRelationships,
    FullServiceAccessToken: FullServiceAccessToken,
    FullServiceAccessTokenAttributes: FullServiceAccessTokenAttributes,
    FullServiceAccessTokenRelationships: FullServiceAccessTokenRelationships,
    GitHubCloudAuthIntakeMappingAttributesResponse:
      GitHubCloudAuthIntakeMappingAttributesResponse,
    GitHubCloudAuthIntakeMappingCreateAttributes:
      GitHubCloudAuthIntakeMappingCreateAttributes,
    GitHubCloudAuthIntakeMappingCreateData:
      GitHubCloudAuthIntakeMappingCreateData,
    GitHubCloudAuthIntakeMappingCreateRequest:
      GitHubCloudAuthIntakeMappingCreateRequest,
    GitHubCloudAuthIntakeMappingDataResponse:
      GitHubCloudAuthIntakeMappingDataResponse,
    GitHubCloudAuthIntakeMappingResponse: GitHubCloudAuthIntakeMappingResponse,
    GitHubCloudAuthIntakeMappingsResponse:
      GitHubCloudAuthIntakeMappingsResponse,
    GitHubCloudAuthPersonaMappingAttributesResponse:
      GitHubCloudAuthPersonaMappingAttributesResponse,
    GitHubCloudAuthPersonaMappingCreateAttributes:
      GitHubCloudAuthPersonaMappingCreateAttributes,
    GitHubCloudAuthPersonaMappingCreateData:
      GitHubCloudAuthPersonaMappingCreateData,
    GitHubCloudAuthPersonaMappingCreateRequest:
      GitHubCloudAuthPersonaMappingCreateRequest,
    GitHubCloudAuthPersonaMappingDataResponse:
      GitHubCloudAuthPersonaMappingDataResponse,
    GitHubCloudAuthPersonaMappingResponse:
      GitHubCloudAuthPersonaMappingResponse,
    GitHubCloudAuthPersonaMappingsResponse:
      GitHubCloudAuthPersonaMappingsResponse,
    GitHubOIDCClaimPatterns: GitHubOIDCClaimPatterns,
    GlobalOrg: GlobalOrg,
    GlobalOrgAttributes: GlobalOrgAttributes,
    GlobalOrgData: GlobalOrgData,
    GlobalOrgUser: GlobalOrgUser,
    GlobalOrgsLinks: GlobalOrgsLinks,
    GlobalOrgsMeta: GlobalOrgsMeta,
    GlobalOrgsMetaPage: GlobalOrgsMetaPage,
    GlobalOrgsResponse: GlobalOrgsResponse,
    IPAllowlistAttributes: IPAllowlistAttributes,
    IPAllowlistData: IPAllowlistData,
    IPAllowlistEntry: IPAllowlistEntry,
    IPAllowlistEntryAttributes: IPAllowlistEntryAttributes,
    IPAllowlistEntryData: IPAllowlistEntryData,
    IPAllowlistResponse: IPAllowlistResponse,
    IPAllowlistUpdateRequest: IPAllowlistUpdateRequest,
    IdentityProviderAttributes: IdentityProviderAttributes,
    IdentityProviderData: IdentityProviderData,
    IdentityProviderResponse: IdentityProviderResponse,
    IdentityProviderUpdateAttributes: IdentityProviderUpdateAttributes,
    IdentityProviderUpdateData: IdentityProviderUpdateData,
    IdentityProviderUpdateRequest: IdentityProviderUpdateRequest,
    IdentityProvidersResponse: IdentityProvidersResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    LeakedKey: LeakedKey,
    LeakedKeyAttributes: LeakedKeyAttributes,
    ListApplicationKeysResponse: ListApplicationKeysResponse,
    ListPersonalAccessTokensResponse: ListPersonalAccessTokensResponse,
    ListServiceAccessTokensResponse: ListServiceAccessTokensResponse,
    ManagedOrgsData: ManagedOrgsData,
    ManagedOrgsRelationshipToOrg: ManagedOrgsRelationshipToOrg,
    ManagedOrgsRelationshipToOrgs: ManagedOrgsRelationshipToOrgs,
    ManagedOrgsRelationships: ManagedOrgsRelationships,
    ManagedOrgsResponse: ManagedOrgsResponse,
    MaxSessionDurationUpdateAttributes: MaxSessionDurationUpdateAttributes,
    MaxSessionDurationUpdateData: MaxSessionDurationUpdateData,
    MaxSessionDurationUpdateRequest: MaxSessionDurationUpdateRequest,
    NullableRelationshipToUser: NullableRelationshipToUser,
    NullableRelationshipToUserData: NullableRelationshipToUserData,
    OAuth2WellKnownSitesAttributes: OAuth2WellKnownSitesAttributes,
    OAuth2WellKnownSitesData: OAuth2WellKnownSitesData,
    OAuth2WellKnownSitesResponse: OAuth2WellKnownSitesResponse,
    OAuthClientRegistrationError: OAuthClientRegistrationError,
    OAuthClientRegistrationRequest: OAuthClientRegistrationRequest,
    OAuthClientRegistrationResponse: OAuthClientRegistrationResponse,
    OAuthScopesRestriction: OAuthScopesRestriction,
    OAuthScopesRestrictionResponse: OAuthScopesRestrictionResponse,
    OAuthScopesRestrictionResponseAttributes:
      OAuthScopesRestrictionResponseAttributes,
    OAuthScopesRestrictionResponseData: OAuthScopesRestrictionResponseData,
    OIDCCloudAuthClaimMatcher: OIDCCloudAuthClaimMatcher,
    OIDCCloudAuthClaimMatcherCreate: OIDCCloudAuthClaimMatcherCreate,
    OIDCCloudAuthPersonaMappingAttributesResponse:
      OIDCCloudAuthPersonaMappingAttributesResponse,
    OIDCCloudAuthPersonaMappingCreateAttributes:
      OIDCCloudAuthPersonaMappingCreateAttributes,
    OIDCCloudAuthPersonaMappingCreateData:
      OIDCCloudAuthPersonaMappingCreateData,
    OIDCCloudAuthPersonaMappingCreateRequest:
      OIDCCloudAuthPersonaMappingCreateRequest,
    OIDCCloudAuthPersonaMappingDataResponse:
      OIDCCloudAuthPersonaMappingDataResponse,
    OIDCCloudAuthPersonaMappingResponse: OIDCCloudAuthPersonaMappingResponse,
    OIDCCloudAuthPersonaMappingsResponse: OIDCCloudAuthPersonaMappingsResponse,
    OIDCCloudAuthProviderAttributesResponse:
      OIDCCloudAuthProviderAttributesResponse,
    OIDCCloudAuthProviderCreateAttributes:
      OIDCCloudAuthProviderCreateAttributes,
    OIDCCloudAuthProviderCreateData: OIDCCloudAuthProviderCreateData,
    OIDCCloudAuthProviderCreateRequest: OIDCCloudAuthProviderCreateRequest,
    OIDCCloudAuthProviderDataResponse: OIDCCloudAuthProviderDataResponse,
    OIDCCloudAuthProviderResponse: OIDCCloudAuthProviderResponse,
    OIDCCloudAuthProvidersResponse: OIDCCloudAuthProvidersResponse,
    OIDCDiscoveryDocument: OIDCDiscoveryDocument,
    OrgAttributes: OrgAttributes,
    OrgAuthorizedClientAttributes: OrgAuthorizedClientAttributes,
    OrgAuthorizedClientData: OrgAuthorizedClientData,
    OrgAuthorizedClientRelationshipOAuth2Client:
      OrgAuthorizedClientRelationshipOAuth2Client,
    OrgAuthorizedClientRelationshipOAuth2ClientData:
      OrgAuthorizedClientRelationshipOAuth2ClientData,
    OrgAuthorizedClientRelationshipUserAuthorizedClients:
      OrgAuthorizedClientRelationshipUserAuthorizedClients,
    OrgAuthorizedClientRelationshipUserAuthorizedClientsData:
      OrgAuthorizedClientRelationshipUserAuthorizedClientsData,
    OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks:
      OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks,
    OrgAuthorizedClientRelationships: OrgAuthorizedClientRelationships,
    OrgAuthorizedClientResponse: OrgAuthorizedClientResponse,
    OrgAuthorizedClientUpdateAttributes: OrgAuthorizedClientUpdateAttributes,
    OrgAuthorizedClientUpdateData: OrgAuthorizedClientUpdateData,
    OrgAuthorizedClientUpdateRequest: OrgAuthorizedClientUpdateRequest,
    OrgAuthorizedClientsResponse: OrgAuthorizedClientsResponse,
    OrgConfigGetResponse: OrgConfigGetResponse,
    OrgConfigListResponse: OrgConfigListResponse,
    OrgConfigRead: OrgConfigRead,
    OrgConfigReadAttributes: OrgConfigReadAttributes,
    OrgConfigWrite: OrgConfigWrite,
    OrgConfigWriteAttributes: OrgConfigWriteAttributes,
    OrgConfigWriteRequest: OrgConfigWriteRequest,
    OrgData: OrgData,
    OrgRelationshipData: OrgRelationshipData,
    OrgSAMLPreferencesAttributes: OrgSAMLPreferencesAttributes,
    OrgSAMLPreferencesData: OrgSAMLPreferencesData,
    OrgSAMLPreferencesUpdateRequest: OrgSAMLPreferencesUpdateRequest,
    Organization: Organization,
    OrganizationAttributes: OrganizationAttributes,
    Pagination: Pagination,
    PartialAPIKey: PartialAPIKey,
    PartialAPIKeyAttributes: PartialAPIKeyAttributes,
    PartialApplicationKey: PartialApplicationKey,
    PartialApplicationKeyAttributes: PartialApplicationKeyAttributes,
    PartialApplicationKeyResponse: PartialApplicationKeyResponse,
    Permission: Permission,
    PermissionAttributes: PermissionAttributes,
    PermissionsResponse: PermissionsResponse,
    PersonalAccessToken: PersonalAccessToken,
    PersonalAccessTokenAttributes: PersonalAccessTokenAttributes,
    PersonalAccessTokenCreateAttributes: PersonalAccessTokenCreateAttributes,
    PersonalAccessTokenCreateData: PersonalAccessTokenCreateData,
    PersonalAccessTokenCreateRequest: PersonalAccessTokenCreateRequest,
    PersonalAccessTokenCreateResponse: PersonalAccessTokenCreateResponse,
    PersonalAccessTokenRelationships: PersonalAccessTokenRelationships,
    PersonalAccessTokenResponse: PersonalAccessTokenResponse,
    PersonalAccessTokenResponseMeta: PersonalAccessTokenResponseMeta,
    PersonalAccessTokenResponseMetaPage: PersonalAccessTokenResponseMetaPage,
    PersonalAccessTokenUpdateAttributes: PersonalAccessTokenUpdateAttributes,
    PersonalAccessTokenUpdateData: PersonalAccessTokenUpdateData,
    PersonalAccessTokenUpdateRequest: PersonalAccessTokenUpdateRequest,
    RelationshipToAccessTokenOwner: RelationshipToAccessTokenOwner,
    RelationshipToAccessTokenOwnerData: RelationshipToAccessTokenOwnerData,
    RelationshipToLeakedKey: RelationshipToLeakedKey,
    RelationshipToLeakedKeyData: RelationshipToLeakedKeyData,
    RelationshipToOrganization: RelationshipToOrganization,
    RelationshipToOrganizationData: RelationshipToOrganizationData,
    RelationshipToOrganizations: RelationshipToOrganizations,
    RelationshipToPermission: RelationshipToPermission,
    RelationshipToPermissionData: RelationshipToPermissionData,
    RelationshipToPermissions: RelationshipToPermissions,
    RelationshipToRole: RelationshipToRole,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    RelationshipToSAMLAssertionAttribute: RelationshipToSAMLAssertionAttribute,
    RelationshipToSAMLAssertionAttributeData:
      RelationshipToSAMLAssertionAttributeData,
    RelationshipToServiceAccount: RelationshipToServiceAccount,
    RelationshipToServiceAccountData: RelationshipToServiceAccountData,
    RelationshipToTeam: RelationshipToTeam,
    RelationshipToTeamData: RelationshipToTeamData,
    RelationshipToUser: RelationshipToUser,
    RelationshipToUserData: RelationshipToUserData,
    RelationshipToUsers: RelationshipToUsers,
    ResponseMetaAttributes: ResponseMetaAttributes,
    RestrictionPolicy: RestrictionPolicy,
    RestrictionPolicyAttributes: RestrictionPolicyAttributes,
    RestrictionPolicyBinding: RestrictionPolicyBinding,
    RestrictionPolicyResponse: RestrictionPolicyResponse,
    RestrictionPolicyUpdateRequest: RestrictionPolicyUpdateRequest,
    Role: Role,
    RoleAttributes: RoleAttributes,
    RoleClone: RoleClone,
    RoleCloneAttributes: RoleCloneAttributes,
    RoleCloneRequest: RoleCloneRequest,
    RoleCreateAttributes: RoleCreateAttributes,
    RoleCreateData: RoleCreateData,
    RoleCreateRequest: RoleCreateRequest,
    RoleCreateResponse: RoleCreateResponse,
    RoleCreateResponseData: RoleCreateResponseData,
    RoleRelationships: RoleRelationships,
    RoleResponse: RoleResponse,
    RoleResponseRelationships: RoleResponseRelationships,
    RoleTemplateArray: RoleTemplateArray,
    RoleTemplateData: RoleTemplateData,
    RoleTemplateDataAttributes: RoleTemplateDataAttributes,
    RoleUpdateAttributes: RoleUpdateAttributes,
    RoleUpdateData: RoleUpdateData,
    RoleUpdateRequest: RoleUpdateRequest,
    RoleUpdateResponse: RoleUpdateResponse,
    RoleUpdateResponseData: RoleUpdateResponseData,
    RolesResponse: RolesResponse,
    SAMLAssertionAttribute: SAMLAssertionAttribute,
    SAMLAssertionAttributeAttributes: SAMLAssertionAttributeAttributes,
    SAMLConfiguration: SAMLConfiguration,
    SAMLConfigurationAttributes: SAMLConfigurationAttributes,
    SAMLConfigurationRelationships: SAMLConfigurationRelationships,
    SAMLConfigurationResponse: SAMLConfigurationResponse,
    SAMLConfigurationUpdateAttributes: SAMLConfigurationUpdateAttributes,
    SAMLConfigurationUpdateData: SAMLConfigurationUpdateData,
    SAMLConfigurationUpdateRequest: SAMLConfigurationUpdateRequest,
    SAMLConfigurationsResponse: SAMLConfigurationsResponse,
    ServiceAccessToken: ServiceAccessToken,
    ServiceAccessTokenAttributes: ServiceAccessTokenAttributes,
    ServiceAccessTokenCreateResponse: ServiceAccessTokenCreateResponse,
    ServiceAccessTokenRelationships: ServiceAccessTokenRelationships,
    ServiceAccessTokenResponse: ServiceAccessTokenResponse,
    ServiceAccessTokenResponseMeta: ServiceAccessTokenResponseMeta,
    ServiceAccessTokenResponseMetaPage: ServiceAccessTokenResponseMetaPage,
    ServiceAccountAccessTokenCreateAttributes:
      ServiceAccountAccessTokenCreateAttributes,
    ServiceAccountAccessTokenCreateData: ServiceAccountAccessTokenCreateData,
    ServiceAccountAccessTokenCreateRequest:
      ServiceAccountAccessTokenCreateRequest,
    ServiceAccountAccessTokenUpdateAttributes:
      ServiceAccountAccessTokenUpdateAttributes,
    ServiceAccountAccessTokenUpdateData: ServiceAccountAccessTokenUpdateData,
    ServiceAccountAccessTokenUpdateRequest:
      ServiceAccountAccessTokenUpdateRequest,
    ServiceAccountCreateAttributes: ServiceAccountCreateAttributes,
    ServiceAccountCreateData: ServiceAccountCreateData,
    ServiceAccountCreateRequest: ServiceAccountCreateRequest,
    UpdateUserIdentityProvidersRequest: UpdateUserIdentityProvidersRequest,
    UpdatedPersonalAccessToken: UpdatedPersonalAccessToken,
    UpdatedPersonalAccessTokenRelationships:
      UpdatedPersonalAccessTokenRelationships,
    UpdatedPersonalAccessTokenResponse: UpdatedPersonalAccessTokenResponse,
    UpdatedServiceAccessToken: UpdatedServiceAccessToken,
    UpdatedServiceAccessTokenRelationships:
      UpdatedServiceAccessTokenRelationships,
    UpdatedServiceAccessTokenResponse: UpdatedServiceAccessTokenResponse,
    UpsertOAuthScopesRestrictionData: UpsertOAuthScopesRestrictionData,
    UpsertOAuthScopesRestrictionDataAttributes:
      UpsertOAuthScopesRestrictionDataAttributes,
    UpsertOAuthScopesRestrictionRequest: UpsertOAuthScopesRestrictionRequest,
    User: User,
    UserAttributes: UserAttributes,
    UserAuthorizedClientAttributes: UserAuthorizedClientAttributes,
    UserAuthorizedClientData: UserAuthorizedClientData,
    UserAuthorizedClientRelationshipOAuth2Client:
      UserAuthorizedClientRelationshipOAuth2Client,
    UserAuthorizedClientRelationshipOAuth2ClientData:
      UserAuthorizedClientRelationshipOAuth2ClientData,
    UserAuthorizedClientRelationshipScopeData:
      UserAuthorizedClientRelationshipScopeData,
    UserAuthorizedClientRelationshipScopes:
      UserAuthorizedClientRelationshipScopes,
    UserAuthorizedClientRelationshipUser: UserAuthorizedClientRelationshipUser,
    UserAuthorizedClientRelationshipUserData:
      UserAuthorizedClientRelationshipUserData,
    UserAuthorizedClientRelationships: UserAuthorizedClientRelationships,
    UserAuthorizedClientResponse: UserAuthorizedClientResponse,
    UserAuthorizedClientsResponse: UserAuthorizedClientsResponse,
    UserCreateAttributes: UserCreateAttributes,
    UserCreateData: UserCreateData,
    UserCreateRequest: UserCreateRequest,
    UserInvitationData: UserInvitationData,
    UserInvitationDataAttributes: UserInvitationDataAttributes,
    UserInvitationRelationships: UserInvitationRelationships,
    UserInvitationResponse: UserInvitationResponse,
    UserInvitationResponseData: UserInvitationResponseData,
    UserInvitationsRequest: UserInvitationsRequest,
    UserInvitationsResponse: UserInvitationsResponse,
    UserOverrideIdentityProviderAttributes:
      UserOverrideIdentityProviderAttributes,
    UserOverrideIdentityProviderData: UserOverrideIdentityProviderData,
    UserOverrideIdentityProvidersResponse:
      UserOverrideIdentityProvidersResponse,
    UserRelationshipIdentityProviderData: UserRelationshipIdentityProviderData,
    UserRelationships: UserRelationships,
    UserResponse: UserResponse,
    UserResponseRelationships: UserResponseRelationships,
    UserUpdateAttributes: UserUpdateAttributes,
    UserUpdateData: UserUpdateData,
    UserUpdateRequest: UserUpdateRequest,
    UsersResponse: UsersResponse,
    ValidateAPIKeyResponse: ValidateAPIKeyResponse,
    ValidateV2Attributes: ValidateV2Attributes,
    ValidateV2Data: ValidateV2Data,
    ValidateV2Response: ValidateV2Response,
  },
};
