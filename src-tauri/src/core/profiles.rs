use serde::{Deserialize, Serialize};
use serde_yaml::Mapping;

#[derive(Default, Debug, Clone, Deserialize, Serialize)]
pub struct Profiles {
    pub title: Option<String>,
    pub lang: Option<String>,
    pub key_page_size: Option<u32>,
    pub value_page_size: Option<u32>,
    pub data_sources: Vec<DataSourceProfile>,
    pub ssh_tunnels: Vec<SshTunnelProfile>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub enum DataSourceType {
    Redis,
    Elasticsearch,
}

#[derive(Default, Debug, Clone, Deserialize, Serialize)]
pub struct DataSourceProfile {
    pub name: String,
    pub created_at: u64,
    pub updated_at: u64,
    pub kind: Option<DataSourceType>,
    pub url: String,
    pub user: Option<String>,
    pub password: Option<String>,
    pub ssh_tunnel_id: Option<String>,
}

#[derive(Default, Debug, Clone, Deserialize, Serialize)]
pub struct SshTunnelProfile {
    pub name: String,
    pub created_at: u64,
    pub updated_at: u64,
    pub host: String,
    pub url: String,
    pub user: Option<String>,
    pub password: Option<String>,
    pub private_key: Option<String>,
    pub passphrase: Option<String>,
}
